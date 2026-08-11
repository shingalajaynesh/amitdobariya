[Windows.Media.Editing.MediaClip, Windows.Media.Editing, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Editing.MediaComposition, Windows.Media.Editing, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$publicDir = (Get-Item "public").FullName
$outDir = Join-Path $publicDir "thumbnails"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function Await-Async ($asyncOp) {
    if (-not $asyncOp) { return $null }
    while ($asyncOp.Status.ToString() -eq "Started") {
        Start-Sleep -Milliseconds 20
    }
    $method = $asyncOp.GetType().GetMethod("GetResults")
    if ($method) {
        return $method.Invoke($asyncOp, $null)
    }
    return $null
}

$videos = Get-ChildItem -Recurse $publicDir -Include "*.mp4","*.mov","*.MOV" | Where-Object { $_.FullName -notmatch "thumbnails" }

Write-Host "Extracting thumbnails for $($videos.Count) video files..."

$successCount = 0
foreach ($v in $videos) {
    $outName = "thumb_" + $v.BaseName + ".jpg"
    $outPath = Join-Path $outDir $outName

    try {
        $file = Await-Async ([Windows.Storage.StorageFile]::GetFileFromPathAsync($v.FullName))
        if (-not $file) { continue }

        $clip = Await-Async ([Windows.Media.Editing.MediaClip]::CreateFromFileAsync($file))
        if (-not $clip) { continue }

        $comp = New-Object Windows.Media.Editing.MediaComposition
        $null = $comp.Clips.Add($clip)

        $ts = [TimeSpan]::FromSeconds(1)
        $stream = Await-Async ($comp.GetThumbnailAsync($ts, 640, 360, [Windows.Media.Editing.VideoFramePrecision]::NearestFrame))
        if (-not $stream) { continue }

        $readStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream)
        $outStream = [System.IO.File]::Create($outPath)
        $readStream.CopyTo($outStream)
        $outStream.Close()
        $readStream.Close()

        $successCount++
        Write-Host "Saved thumbnail ($successCount/$($videos.Count)): $outName"
    } catch {
        Write-Host "Skipped $($v.Name): $($_.Exception.Message)"
    }
}

Write-Host "Done! Generated $successCount thumbnails."
