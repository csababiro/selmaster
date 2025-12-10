# Download product images from selmaster.ro
$outputDir = "public/images"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# Product images from the site
$images = @(
    @{ url = "https://selmaster.ro/uploaded_files/ggg(2).png"; name = "cheresta-rasinoase.jpg" }
    @{ url = "https://selmaster.ro/uploaded_files/ggg(2).png"; name = "lambriuri-rasinoase.jpg" }
    @{ url = "https://www.selmaster.ro/uploaded_files/RUFDD.jpg"; name = "brichete-fag.jpg" }
    @{ url = "https://selmaster.ro/uploaded_files/ggg(2).png"; name = "peleti-rasinoase.jpg" }
)

Write-Host "Downloading product images..." -ForegroundColor Green

foreach ($img in $images) {
    $outputPath = Join-Path $outputDir $img.name
    try {
        Write-Host "Downloading $($img.name)..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $img.url -OutFile $outputPath -ErrorAction Stop
        Write-Host "Downloaded $($img.name)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($img.name): $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Done! Images saved to $outputDir" -ForegroundColor Green
