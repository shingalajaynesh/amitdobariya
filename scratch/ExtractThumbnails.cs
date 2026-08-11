using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

class Program {
    [ComImport, Guid("bcc827b3-c552-498b-91ee-96c4c99c1075"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    interface IShellItemImageFactory {
        [PreserveSig]
        int GetImage([In] SIZE size, [In] int flags, out IntPtr phbm);
    }

    [StructLayout(LayoutKind.Sequential)]
    struct SIZE {
        public int cx;
        public int cy;
        public SIZE(int cx, int cy) { this.cx = cx; this.cy = cy; }
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode, PreserveSig = false)]
    static extern void SHCreateItemFromParsingName(
        [MarshalAs(UnmanagedType.LPWStr)] string pszPath,
        IntPtr pbc,
        [In] ref Guid riid,
        out IShellItemImageFactory ppv);

    [DllImport("gdi32.dll")]
    static extern bool DeleteObject(IntPtr hObject);

    static void Main(string[] args) {
        string currentDir = Directory.GetCurrentDirectory();
        string publicDir = Path.Combine(currentDir, "public");
        string outDir = Path.Combine(publicDir, "thumbnails");
        Directory.CreateDirectory(outDir);

        Console.WriteLine("Searching in: " + publicDir);

        string[] extensions = new string[] { "*.mp4", "*.mov", "*.MOV" };
        int count = 0;

        foreach (string ext in extensions) {
            string[] files = Directory.GetFiles(publicDir, ext, SearchOption.AllDirectories);
            foreach (string file in files) {
                if (file.Contains("thumbnails")) continue;

                string fileName = Path.GetFileName(file);
                string baseName = Path.GetFileNameWithoutExtension(file);
                string outPath = Path.Combine(outDir, "thumb_" + baseName + ".jpg");

                if (File.Exists(outPath)) {
                    count++;
                    continue;
                }

                try {
                    Guid uuid = new Guid("bcc827b3-c552-498b-91ee-96c4c99c1075");
                    IShellItemImageFactory factory;
                    SHCreateItemFromParsingName(file, IntPtr.Zero, ref uuid, out factory);

                    IntPtr hbitmap;
                    int hr = factory.GetImage(new SIZE(800, 450), 0x0, out hbitmap);
                    if (hr == 0 && hbitmap != IntPtr.Zero) {
                        using (Bitmap bmp = Image.FromHbitmap(hbitmap)) {
                            bmp.Save(outPath, ImageFormat.Jpeg);
                        }
                        DeleteObject(hbitmap);
                        count++;
                        Console.WriteLine("Extracted thumbnail: " + Path.GetFileName(outPath));
                    } else {
                        Console.WriteLine("Failed hr=" + hr + " for " + fileName);
                    }
                } catch (Exception ex) {
                    Console.WriteLine("Error for " + fileName + ": " + ex.Message);
                }
            }
        }
        Console.WriteLine("Total extracted: " + count);
    }
}
