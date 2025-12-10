# PowerShell script to download product images from the old site
# Run this before the old site is deleted

$baseUrl = "https://www.selmaster.ro"
$outputDir = "public/images"

# Create images directory if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# List of images to download (update these with actual image paths from the old site)
$images = @(
    @{ name = "cheresta-rasinoase.jpg"; url = "$baseUrl/uploaded_files/ggg(2).png" }
    @{ name = "lambriuri-rasinoase.jpg"; url = "$baseUrl/uploaded_files/ggg(2).png" }
    @{ name = "brichete-fag.jpg"; url = "$baseUrl/uploaded_files/ggg(2).png" }
    @{ name = "peleti-rasinoase.jpg"; url = "$baseUrl/uploaded_files/ggg(2).png" }
)

Write-Host "Downloading images from $baseUrl..." -ForegroundColor Green

foreach ($image in $images) {
    $outputPath = Join-Path $outputDir $image.name
    try {
        Write-Host "Downloading $($image.name)..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $image.url -OutFile $outputPath -ErrorAction Stop
        Write-Host "✓ Downloaded $($image.name)" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed to download $($image.name): $_" -ForegroundColor Red
    }
}

Write-Host "`nDone! Images saved to $outputDir" -ForegroundColor Green
Write-Host "`nIMPORTANT: Update the image URLs in scripts/download-images.ps1 with the actual image paths from selmaster.ro before running this script!" -ForegroundColor Yellow

