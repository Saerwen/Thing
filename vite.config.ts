import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// When building for GitHub Pages (a project site served at
// https://<user>.github.io/<repo>/), the app must be served from a sub-path.
// The deploy workflow sets GITHUB_PAGES=true; local dev/build stays at '/'.
const base = process.env.GITHUB_PAGES ? '/Thing/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon.svg', 'icons/apple-touch-icon-180.png'],
      manifest: {
        name: 'Privatus Trainer',
        short_name: 'Privatus',
        description: 'Drill the Privatus In-Depth Prep Study Manual to exhaustion.',
        theme_color: '#4B2E83',
        background_color: '#FAF7F2',
        display: 'standalone',
        orientation: 'portrait',
        // start_url / scope are resolved relative to `base` by the plugin.
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precache the built app so it works fully offline after the first load.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
      },
    }),
  ],
});
