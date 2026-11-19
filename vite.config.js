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
        age: path.resolve(__dirname, 'age-calculator.html'),
        percentage: path.resolve(__dirname, 'percentage-calculator.html'),
        bmi: path.resolve(__dirname, 'bmi-calculator.html'),
        emi: path.resolve(__dirname, 'emi-calculator.html'),
        discount: path.resolve(__dirname, 'discount-calculator.html'),
        textShadow: path.resolve(__dirname, 'text-shadow.html'),
        base64ToImage: path.resolve(__dirname, 'base64-to-image.html'),
        faviconMaker: path.resolve(__dirname, 'favicon-maker.html'),
        textToSpeech: path.resolve(__dirname, 'text-to-speech.html'),
        reverseText: path.resolve(__dirname, 'reverse-text.html'),
        removeDuplicates: path.resolve(__dirname, 'remove-duplicates.html'),
        randomNumber: path.resolve(__dirname, 'random-number.html'),
        textToBinary: path.resolve(__dirname, 'text-to-binary.html'),
        textToPdf: path.resolve(__dirname, 'text-to-pdf.html'),
        htmlEntity: path.resolve(__dirname, 'html-entity.html'),
      },
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
