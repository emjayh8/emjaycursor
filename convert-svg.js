const sharp = require('sharp');
const fs = require('fs');

// Read the SVG file
const svgBuffer = fs.readFileSync('./public/og-image.svg');

// Convert SVG to PNG
sharp(svgBuffer)
  .png()
  .toFile('./public/og-image.png')
  .then(info => {
    console.log('Successfully converted SVG to PNG:', info);
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
  }); 