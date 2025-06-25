// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vivahaverse/', // ✅ This is mandatory for GitHub Pages
  plugins: [react()],
});
