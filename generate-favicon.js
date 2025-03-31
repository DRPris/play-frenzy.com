/**
 * Favicon Generator Script
 * 
 * This script generates basic favicon files for the PLAY-FRENZY website.
 * It creates a simple cyberpunk-themed icon with the letters "PF" on a gradient background.
 * 
 * To use:
 * 1. Install Node.js
 * 2. Install required packages: npm install canvas fs
 * 3. Run the script: node generate-favicon.js
 */

const { createCanvas } = require('canvas');
const fs = require('fs');

// Make sure the favicon directory exists
if (!fs.existsSync('./favicon')) {
  fs.mkdirSync('./favicon');
}

// Function to create the favicon
async function generateFavicon(size, filename) {
  // Create canvas with the specified size
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Create a cyberpunk-style gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#0F1B2B');    // cyber-dark
  gradient.addColorStop(0.5, '#2C3E50');  // cyber-purple
  gradient.addColorStop(1, '#34495E');    // deep-purple
  
  // Fill the background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Add a subtle grid pattern
  ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  
  // Horizontal lines
  for (let y = 0; y < size; y += size/10) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }
  
  // Vertical lines
  for (let x = 0; x < size; x += size/10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
  }
  
  // Add a glowing border
  const borderGradient = ctx.createLinearGradient(0, 0, size, size);
  borderGradient.addColorStop(0, 'rgba(0, 255, 255, 0.5)');   // neon-blue
  borderGradient.addColorStop(0.5, 'rgba(57, 255, 20, 0.5)'); // neon-green
  borderGradient.addColorStop(1, 'rgba(0, 255, 255, 0.5)');   // neon-blue
  
  ctx.strokeStyle = borderGradient;
  ctx.lineWidth = size / 20;
  ctx.beginPath();
  ctx.roundRect(size / 20, size / 20, size - (size / 10), size - (size / 10), size / 10);
  ctx.stroke();
  
  // Add text "PF" (PLAY-FRENZY)
  const fontSize = size * 0.45;
  ctx.font = `bold ${fontSize}px 'Manrope', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Create text gradient
  const textGradient = ctx.createLinearGradient(size/4, size/4, size*3/4, size*3/4);
  textGradient.addColorStop(0, '#00FFFF');  // neon-blue
  textGradient.addColorStop(1, '#39FF14');  // neon-green
  
  ctx.fillStyle = textGradient;
  ctx.fillText('PF', size/2, size/2);
  
  // Add glow effect
  ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
  ctx.shadowBlur = size/10;
  ctx.fillText('PF', size/2, size/2);
  
  // Save the file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`./favicon/${filename}`, buffer);
  console.log(`Generated: ${filename}`);
}

// Generate all the required favicon files
async function generateAllFavicons() {
  try {
    console.log('Generating favicons...');
    
    // Generate the basic favicon sizes
    await generateFavicon(16, 'favicon-16x16.png');
    await generateFavicon(32, 'favicon-32x32.png');
    await generateFavicon(48, 'favicon.ico');  // technically not correct but will work for simple cases
    await generateFavicon(180, 'apple-touch-icon.png');
    await generateFavicon(192, 'android-chrome-192x192.png');
    await generateFavicon(512, 'android-chrome-512x512.png');
    
    console.log('Favicon generation complete!');
    console.log('Install these files to your server and update your HTML head to include the necessary links.');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Run the generator
generateAllFavicons(); 