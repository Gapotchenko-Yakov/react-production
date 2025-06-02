const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

const cacheDirs = [
    '.cache',                       // storybook / webpack
    'node_modules/.cache',          // webpack
    'coverage',                     // jest coverage
    'dist',                         // vite / custom builds
    'build',                        // cra
];

console.log('Clearing local build and test caches…');

for (const dir of cacheDirs) {
    const fullPath = path.join(rootDir, dir);
    if (fs.existsSync(fullPath)) {
        fs.rmSync(fullPath, { recursive: true, force: true });
        console.log(`Deleted: ${dir}`);
    } else {
        console.log(`Skipped: ${dir} (not found)`);
    }
}
