# Downloading Images from the Old Site

Since the old site (selmaster.ro) will be deleted, you need to download the product images locally before that happens.

## Steps to Download Images

1. **Find the actual image URLs** from the old site:
   - Visit https://www.selmaster.ro
   - Navigate to product pages
   - Right-click on product images and "Copy Image Address"
   - Note down the full URLs

2. **Update the download script**:
   - Open `scripts/download-images.ps1`
   - Replace the placeholder URLs with the actual image URLs you found
   - Update the filenames if needed

3. **Run the download script**:
   ```powershell
   powershell -ExecutionPolicy Bypass -File scripts/download-images.ps1
   ```

4. **Alternative: Manual Download**:
   - Download images directly from the old site
   - Save them to `public/images/` folder with these names:
     - `cheresta-rasinoase.jpg`
     - `lambriuri-rasinoase.jpg`
     - `brichete-fag.jpg`
     - `peleti-rasinoase.jpg`

## Image Requirements

- Format: JPG or PNG
- Recommended size: 800x600px or larger
- Location: `public/images/` directory

The product configuration in `app/lib/content/products.ts` is already set up to use local images from `/images/`.

