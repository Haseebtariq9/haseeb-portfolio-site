import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/haseeb-portfolio-site/', // Adjust this to match your repo name
});
