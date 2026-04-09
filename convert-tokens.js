const fs = require('fs');

const inputFile = 'design-tokens.tokens (2).json';
const outputFile = 'design-tokens.css';

try {
  const rawData = fs.readFileSync(inputFile, 'utf-8');
  const tokens = JSON.parse(rawData);

  let cssContent = '/* Auto-generated CSS Variables from Design Tokens */\n:root {\n';

  function toKebabCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
              .replace(/[\s_]+/g, '-')
              .toLowerCase()
              .replace(/[()]/g, '')
              .replace(/^-+|-+$/g, '');
  }

  function processNode(node, path = []) {
    if (node && typeof node === 'object') {
      if (node.value !== undefined) {
        if (typeof node.value === 'object') {
          // Handle nested objects like custom-fontStyle
          for (const [key, val] of Object.entries(node.value)) {
            let type = typeof val === 'number' ? 'number' : 'string';
            if (val === 0) type = 'number';
            processNode({ type: type, value: val }, [...path, key]);
          }
        } else {
          let val = node.value;
          const lastKey = path.length > 0 ? path[path.length - 1].toLowerCase() : '';
          
          // Determine if value needs a pixel unit
          const isDimension = node.type === 'dimension' || 
                              lastKey.includes('size') || 
                              lastKey.includes('height') || 
                              lastKey.includes('spacing') || 
                              lastKey.includes('indent') || 
                              lastKey.includes('radius');
                              
          if (isDimension && typeof val === 'number' && val !== 0 && !lastKey.includes('weight')) {
             val = val + 'px';
          }
          
          // Remove "collection 1" from name if it exists, as it's just a folder in Figma
          const cleanPath = path.filter(p => !p.toLowerCase().includes('collection'));
          
          let varName = '--sys-' + cleanPath.map(toKebabCase).join('-');
          varName = varName.replace(/-+/g, '-'); // collapse multiple dashes
          
          cssContent += `  ${varName}: ${val};\n`;
        }
      } else {
        // Recurse into groups
        for (const key in node) {
          if (!['extensions', 'description', 'type', 'blendMode'].includes(key)) {
             processNode(node[key], [...path, key]);
          }
        }
      }
    }
  }

  processNode(tokens);
  cssContent += '}\n';

  fs.writeFileSync(outputFile, cssContent, 'utf-8');
  console.log('Successfully generated ' + outputFile);
} catch (error) {
  console.error('Error generating tokens:', error);
}
