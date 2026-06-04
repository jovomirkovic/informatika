// Removes the inner buildscript{} block from Capacitor plugin build.gradle files.
// These blocks hardcode AGP 8.2.1 which conflicts with newer Android Studio AGP versions.
// Plugins inherit the root project's AGP version after this patch.
const fs = require('fs');
const path = require('path');

const plugins = ['app', 'filesystem', 'local-notifications', 'preferences', 'share'];

plugins.forEach((plugin) => {
  const filePath = path.join(
    __dirname,
    'node_modules',
    '@capacitor',
    plugin,
    'android',
    'build.gradle'
  );

  if (!fs.existsSync(filePath)) {
    console.log(`[patch] Skipping ${plugin} - file not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the buildscript { ... } block (single-level braces)
  const patched = content.replace(/^buildscript\s*\{[^{}]*(\{[^{}]*\}[^{}]*)?\}/gms, '');

  if (patched !== content) {
    fs.writeFileSync(filePath, patched, 'utf8');
    console.log(`[patch] Removed buildscript block from @capacitor/${plugin}`);
  } else {
    console.log(`[patch] @capacitor/${plugin} already patched or no buildscript block found`);
  }
});
