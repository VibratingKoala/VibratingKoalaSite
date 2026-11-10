import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vibratingkoala.my',
  // projects/fudeneko.html, served by Workers assets at /projects/fudeneko with no redirect
  build: { format: 'file' },
  trailingSlash: 'never',
});
