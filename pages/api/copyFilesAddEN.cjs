// This script copies all existing mdx and json filed in /pages/docs and appends an .en in the extension, to prepare for internationalization.

const fs = require('fs');
const path = require('path');

function copyFilesToDirectory(sourceDirectory, targetDirectory) {
  // Ensure target directory exists
  if (!fs.existsSync(targetDirectory)){
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  const files = fs.readdirSync(sourceDirectory);

  for (const file of files) {
    const oldPath = path.join(sourceDirectory, file);
    const stats = fs.statSync(oldPath);

    if (stats.isDirectory()) {
      copyFilesToDirectory(oldPath, path.join(targetDirectory, file));
    } else if (stats.isFile() && (file.endsWith('.mdx') || file.endsWith('.json'))) {
      const newPath = path.join(targetDirectory, file).replace(/\.mdx$/, '.en.mdx').replace(/\.json$/, '.en.json');
      fs.copyFileSync(oldPath, newPath);
      console.log(`Copied ${oldPath} to ${newPath}`);
    }
  }
}

copyFilesToDirectory(path.join(process.cwd(), 'pages/docs'), path.join(process.cwd(), 'docs-en'));
