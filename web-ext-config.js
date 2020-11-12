module.exports = {
  // Global options:
  verbose: true,
  // Command options:
  build: {
    overwriteDest: true,
  },
  run: {
    firefox: "nightly",
    pref: ["extensions.experiments.enabled=true"],
  },
  ignoreFiles: [
    'docs',
    'scripts',
    'src',
    'stories',
    'tests',
    'CODE_OF_CONDUCT.md',
    'copyright.txt',
    'LICENSE',
    'package-lock.json',
    'package.json',
    'README.md',
    'rollup.config.*',
    'web-ext-config.js'
  ],
};
