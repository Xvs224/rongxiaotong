const images = import.meta.glob('@/assets/img/*.{jpg,jpeg,png,gif,svg,webp}', { eager: true });

const imageMap = {};
for (const [path, module] of Object.entries(images)) {
  const filename = path.split('/').pop();
  imageMap[filename] = module.default;
}

const fallbackImage = imageMap['rice.png'] || '';
const baseUrl = import.meta.env.VITE_APP_Address || '';

export function getImageUrl(filename) {
  if (!filename) return fallbackImage;
  if (filename.startsWith('http')) return filename;
  // Comma-separated multi-image: take first
  const first = filename.split(',')[0];
  // Check local bundled assets first
  if (imageMap[first]) return imageMap[first];
  // Uploaded file on backend (full path like 'order/abc.jpg')
  if (first.includes('/')) {
    return `${baseUrl}/file/${first}`;
  }
  // Old seed data without path prefix - try backend order subfolder
  return `${baseUrl}/file/order/${first}`;
}