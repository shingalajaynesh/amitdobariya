$code = @'
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ShellThumbnail {
    [Guid("bcc827b3-c552-498b-91ee-96c4c99c1075"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    interface IShellItemImageFactory {
        [PreserveSig]
        int GetImage([In, StructLayout(LayoutKind.Sequential)] SIZE size, [In] int flags, out IntPtr phbm);
    }

    [StructLayout(LayoutKind.Sequential)]
    struct SIZE {
        public int cx;
        public int cy;
        public SIZE(int cx, int cy) { this.cx = cx; this.cy = cy; }
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode, PreserveSig = false)]
    static extern void SHCreateItemFromParsingName([MarshalAs(UnmanagedType.LPWStr)] string pszPath, IntPtr pbc, [In] ref Guid riid, [MarshalAs(UnmanagedType.Interface)] out IShellItemImageFactory ppv);

    public static bool SaveThumbnail(string videoPath, string outputPath, int width, int height) {
        try {
            Guid uuid = new Guid("bcc827b3-c552-498b-91ee-96c4c99c1075");
            IShellItemImageFactory factory;
            SHCreateItemFromParsingName(videoPath, IntPtr.Zero, ref uuid, out factory);

            IntPtr hbitmap;
            // SIIGBF_RESIZERETURNINGCACHED = 0x0
            int hr = factory.GetImage(new SIZE(width, height), 0x0, out hbitmap);
            if (hr == 0 && hbitmap != IntPtr.Zero) {
                using (Bitmap bmp = Bitmap.FromHBitmap(hbitmap)) {
                    bmp.Save(outputPath, ImageFormat.Jpeg);
                }
                DeleteObject(hbitmap);
                return true;
            }
        } catch (Exception ex) {
            Console.WriteLine("Error for " + videoPath + ": " + ex.Message);
        }
        return false;
    }

    [DllImport("gdi32.dll")]
    static extern bool DeleteObject(IntPtr hObject);
}
'@

Add-Type -TypeDefinition $code -ReferencedAssemblies "System.Drawing.dll"

[System.IO.Directory]::CreateDirectory("public/thumbnails") | Out-Null

$videos = Get-ChildItem -Recurse public -Include "*.mp4","*.MOV","*.mov" | Where-Object { -not $_.PSIsContainer }

Write-Host "Extracting thumbnails for $($videos.Count) videos using Windows Shell..."

$count = 0
foreach ($v in $videos) {
    $outName = "thumb_" + $v.BaseName + ".jpg"
    $outPath = Join-Path "public/thumbnails" $outName
    $success = [ShellThumbnail]::SaveThumbnail($v.FullName, $outPath, 800, 450)
    if ($success) {
        $count++
        Write-Host "Generated thumbnail: $outName"
    } else {
        Write-Host "Failed thumbnail: $($v.Name)"
    }
}

Write-Host "Finished! Successfully created $count video thumbnails in public/thumbnails/"
