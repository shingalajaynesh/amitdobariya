const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const folders = [
  { name: 'Anchor', folderCategory: 'Anchor Photos', category: 'anchoring', type: 'photo' },
  { name: 'Anchoring Video', folderCategory: 'Anchoring Videos', category: 'anchoring', type: 'video' },
  { name: 'Motivation', folderCategory: 'Motivational Photos', category: 'speaking', type: 'photo' },
  { name: 'Motivational Video', folderCategory: 'Motivational Videos', category: 'speaking', type: 'video' },
];

const validImgExts = ['.jpg', '.jpeg', '.webp', '.png'];
const validVideoExts = ['.mp4', '.mov'];

const mediaItems = [];

let counter = 1;

folders.forEach(f => {
  const dirPath = path.join(publicDir, f.name);
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = validImgExts.includes(ext);
    const isVideo = validVideoExts.includes(ext);

    // Skip un-supported files like raw .heic
    if (!isImage && !isVideo) {
      if (ext === '.heic') return;
    }

    if (f.type === 'photo' && !isImage) return;
    if (f.type === 'video' && !isVideo) return;

    const encodedFolder = encodeURIComponent(f.name);
    const encodedFile = encodeURIComponent(file);
    const url = `/${encodedFolder}/${encodedFile}`;

    // Clean title
    const baseName = path.basename(file, ext);
    let cleanTitle = baseName;
    if (f.folderCategory === 'Anchor Photos') cleanTitle = `Amit Dobariya Stage Anchor #${counter}`;
    else if (f.folderCategory === 'Anchoring Videos') cleanTitle = `Amit Dobariya Anchoring Video #${counter}`;
    else if (f.folderCategory === 'Motivational Photos') cleanTitle = `Amit Dobariya Motivational Seminar #${counter}`;
    else if (f.folderCategory === 'Motivational Videos') cleanTitle = `Amit Dobariya Motivational Speech #${counter}`;

    const item = {
      id: `m_${counter}`,
      type: f.type,
      title: cleanTitle,
      category: f.category,
      folderCategory: f.folderCategory,
      url: url,
      thumbnailUrl: f.type === 'video' ? (f.folderCategory === 'Anchoring Videos' ? '/Anchor/1785993375816284564.jpeg' : '/Motivation/0O3A0630.jpg') : url,
      caption: f.folderCategory.includes('Anchor') 
        ? 'Amit Dobariya hosting and anchoring stage event in Surat, Gujarat.' 
        : 'Amit Dobariya delivering motivational keynote seminar to students and audience.',
    };

    mediaItems.push(item);
    counter++;
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
console.log('Successfully wrote data/mediaData.ts');
