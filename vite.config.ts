import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function custom404Plugin(): Plugin {
  return {
    name: 'custom-404-handler',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (
          url.startsWith('/@') ||
          url.startsWith('/node_modules') ||
          url.startsWith('/src') ||
          url.startsWith('/assets') ||
          url.startsWith('/favicon') ||
          url.startsWith('/site.webmanifest') ||
          url.startsWith('/ads.txt') ||
          url.startsWith('/robots.txt') ||
          url.startsWith('/sitemap.xml')
        ) {
          return next();
        }

        let filePath = path.resolve(process.cwd(), '.' + url);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, 'index.html');
        }

        if (!fs.existsSync(filePath)) {
          const notFoundPath = path.resolve(process.cwd(), '404.html');
          if (fs.existsSync(notFoundPath)) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            return res.end(fs.readFileSync(notFoundPath, 'utf8'));
          }
        }
        next();
      });
    },
  };
}

function getHtmlInputs(): Record<string, string> {
  const inputs: Record<string, string> = {};
  function scan(dir: string) {
    if (!fs.existsSync(dir)) return;
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      if (file === 'node_modules' || file === 'dist' || file === '.git' || file === '.aistudio') return;
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        scan(fullPath);
      } else if (file.endsWith('.html')) {
        const key = fullPath.replace(/\.html$/, '').replace(/^\.\/?/, '').replace(/\//g, '_') || 'main';
        inputs[key] = path.resolve(process.cwd(), fullPath);
      }
    });
  }
  scan('.');
  return inputs;
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), custom404Plugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    build: {
      rollupOptions: {
        input: getHtmlInputs(),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
