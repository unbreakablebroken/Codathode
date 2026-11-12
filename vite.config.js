import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        qr: path.resolve(__dirname, 'qr-generator.html'),
        igcse: path.resolve(__dirname, 'igcse-calculator.html'),
        case: path.resolve(__dirname, 'case-converter.html'),
        word: path.resolve(__dirname, 'word-counter.html'),
        base64: path.resolve(__dirname, 'base64.html'),
        color: path.resolve(__dirname, 'color-picker.html'),
        password: path.resolve(__dirname, 'password-generator.html'),
        imgBase64: path.resolve(__dirname, 'image-to-base64.html'),
        json: path.resolve(__dirname, 'json-formatter.html'),
        lorem: path.resolve(__dirname, 'lorem-ipsum.html'),
        palette: path.resolve(__dirname, 'palette-generator.html'),
        markdown: path.resolve(__dirname, 'markdown-previewer.html'),
        diff: path.resolve(__dirname, 'diff-checker.html'),
        interest: path.resolve(__dirname, 'compound-interest.html'),
        namePicker: path.resolve(__dirname, 'name-picker.html'),
        typing: path.resolve(__dirname, 'typing-test.html'),
      },
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
