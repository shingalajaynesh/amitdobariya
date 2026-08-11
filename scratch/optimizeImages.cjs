const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = ['public/Anchor', 'public/Motivation', 'public/images'];

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return { processedCount: 0, totalSavedBytes: 0 };
  const files = fs.readdirSync(dirPath);

  let processedCount = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const sub = await processDirectory(filePath);
      processedCount += sub.processedCount;
      totalSavedBytes += sub.totalSavedBytes;
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const originalSize = stat.size;
      if (originalSize < 350 * 1024) {
        continue;
      }

      try {
        const inputBuffer = fs.readFileSync(filePath);
        let pipeline = sharp(inputBuffer).resize({
          width: 1920,
          height: 1920,
          fit: 'inside',
          withoutEnlargement: true,
        });

        let outputBuffer;
        if (ext === '.png') {
          outputBuffer = await pipeline.png({ quality: 80, compressionLevel: 8 }).toBuffer();
        } else {
          outputBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
        }

        if (outputBuffer.length < originalSize) {
          fs.writeFileSync(filePath, outputBuffer);
          totalSavedBytes += (originalSize - outputBuffer.length);
          processedCount++;
          console.log(`Optimized ${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(outputBuffer.length / 1024).toFixed(0)}KB`);
        }
      } catch (err) {
        console.error(`Skipped ${path.basename(filePath)}: ${err.message}`);
      }
    }
  }

  return { processedCount, totalSavedBytes };
}

async function main() {
  console.log('Starting image optimization...');
  let totalProcessed = 0;
  let totalSaved = 0;

  for (const dir of targetDirs) {
    const fullPath = path.resolve(process.cwd(), dir);
    const res = await processDirectory(fullPath);
    if (res) {
      totalProcessed += res.processedCount;
      totalSaved += res.totalSavedBytes;
    }
  }

  console.log(`\nFinished! Optimized ${totalProcessed} images. Saved ${(totalSaved / 1024 / 1024).toFixed(2)} MB.`);
}

main();
