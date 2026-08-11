const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const validImgExts = ['.jpg', '.jpeg', '.webp', '.png'];
const validVideoExts = ['.mp4', '.mov'];

// Collect all photos for video thumbnail poster fallbacks
const anchorPhotos = [];
const motivationPhotos = [];

const anchorDir = path.join(publicDir, 'Anchor');
if (fs.existsSync(anchorDir)) {
  fs.readdirSync(anchorDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.heic' && validImgExts.includes(ext)) {
      anchorPhotos.push(`/Anchor/${encodeURIComponent(file)}`);
    }
  });
}

const motivationDir = path.join(publicDir, 'Motivation');
if (fs.existsSync(motivationDir)) {
  fs.readdirSync(motivationDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.heic' && validImgExts.includes(ext)) {
      motivationPhotos.push(`/Motivation/${encodeURIComponent(file)}`);
    }
  });
}

const folders = [
  { name: 'Anchor', folderCategory: 'Anchor Photos', category: 'anchoring', type: 'photo' },
  { name: 'Anchoring Video', folderCategory: 'Anchoring Videos', category: 'anchoring', type: 'video' },
  { name: 'Motivation', folderCategory: 'Motivational Photos', category: 'speaking', type: 'photo' },
  { name: 'Motivational Video', folderCategory: 'Motivational Videos', category: 'speaking', type: 'video' },
];

const mediaItems = [];

let photoCount = 1;
let videoCount = 1;
let anchorVidIdx = 0;
let motivationVidIdx = 0;

folders.forEach(f => {
  const dirPath = path.join(publicDir, f.name);
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = validImgExts.includes(ext);
    const isVideo = validVideoExts.includes(ext);

    if (ext === '.heic') return;

    if (f.type === 'photo' && !isImage) return;
    if (f.type === 'video' && !isVideo) return;

    const encodedFolder = encodeURIComponent(f.name);
    const encodedFile = encodeURIComponent(file);
    const url = `/${encodedFolder}/${encodedFile}`;

    const baseName = path.basename(file, ext);
    let cleanTitle = baseName;
    let counter = f.type === 'photo' ? photoCount++ : videoCount++;

    if (f.folderCategory === 'Anchor Photos') cleanTitle = `Amit Dobariya Stage Anchor #${counter}`;
    else if (f.folderCategory === 'Anchoring Videos') cleanTitle = `Amit Dobariya Anchoring Video #${counter}`;
    else if (f.folderCategory === 'Motivational Photos') cleanTitle = `Amit Dobariya Motivational Seminar #${counter}`;
    else if (f.folderCategory === 'Motivational Videos') cleanTitle = `Amit Dobariya Motivational Speech #${counter}`;

    let thumb = url;
    if (f.type === 'video') {
      if (f.folderCategory === 'Anchoring Videos') {
        thumb = anchorPhotos[anchorVidIdx % anchorPhotos.length] || url;
        anchorVidIdx++;
      } else {
        thumb = motivationPhotos[motivationVidIdx % motivationPhotos.length] || url;
        motivationVidIdx++;
      }
    }

    const item = {
      id: `m_${counter}`,
      type: f.type,
      title: cleanTitle,
      category: f.category,
      folderCategory: f.folderCategory,
      url: url,
      thumbnailUrl: thumb,
      caption: f.folderCategory.includes('Anchor') 
        ? 'Amit Dobariya hosting and anchoring stage event in Surat, Gujarat.' 
        : 'Amit Dobariya delivering motivational keynote seminar to students and audience.',
    };

    mediaItems.push(item);
  });
});

console.log(`Indexed total ${mediaItems.length} media items.`);

const tsContent = `// Automatically generated media dataset from public folders
export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  category: 'speaking' | 'anchoring' | 'students' | 'events' | 'transformation';
  folderCategory: 'Anchor Photos' | 'Anchoring Videos' | 'Motivational Photos' | 'Motivational Videos';
  url: string;
  thumbnailUrl: string;
  caption: string;
  featured?: boolean;
}

export const MEDIA_ITEMS: MediaItem[] = ${JSON.stringify(mediaItems, null, 2)};

export const FEATURED_HERO_IMAGE = "/Motivation/0O3A0630.jpg";
export const FEATURED_ABOUT_IMAGE = "/Motivation/0O3A0657.jpg";
export const FEATURED_SPEAKER_IMAGE = "/Motivation/0O3A0665.jpg";
export const FEATURED_ANCHOR_IMAGE = "/Anchor/1785993375816284564.jpeg";
export const FEATURED_VASTRO_IMAGE = "/Motivation/655168738_18016466618818922_9170957739194709942_n..jpg";
`;

fs.writeFileSync(path.join(__dirname, '..', 'data', 'mediaData.ts'), tsContent);
console.log('Successfully written data/mediaData.ts');
