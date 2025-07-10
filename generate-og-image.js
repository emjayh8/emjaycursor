const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to 1200x630 (standard OG image size)
  await page.setViewport({ width: 1200, height: 630 });
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, 'og-image.html');
  await page.goto(`file://${htmlPath}`);
  
  // Wait for the page to load
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Take screenshot
  await page.screenshot({
    path: 'public/og-image.png',
    type: 'png',
    fullPage: false
  });
  
  console.log('Open Graph image generated successfully: public/og-image.png');
  
  await browser.close();
}

generateOGImage().catch(console.error); 