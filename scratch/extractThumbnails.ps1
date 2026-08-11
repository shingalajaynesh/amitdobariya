$shell = New-Object -ComObject Shell.Application

$videos = Get-ChildItem -Recurse public -Include "*.mp4","*.MOV","*.mov" | Where-Object { -not $_.PSIsContainer }

Write-Host "Found $($videos.Count) video files."
foreach ($v in $videos) {
    Write-Host "Video: $($v.Name)"
}
