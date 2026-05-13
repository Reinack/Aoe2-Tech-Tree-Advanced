const fs = require('fs');
const path = require('path');

const civsDir = 'src/data/civ';

const files = fs.readdirSync(civsDir).filter(f => f.endsWith('.js') && f !== 'index.js');

files.forEach(file => {
  const filePath = path.join(civsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const civName = file.replace('.js', '');
  const varName = civName.toUpperCase();
  
  // Add window assignment
  content += `\n\nwindow.${varName} = ${varName};`;
  
  fs.writeFileSync(filePath, content);
});

console.log('Added window assignments to all civ files.');