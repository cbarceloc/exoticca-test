import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'build', // Changed output folder, like in CRA
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 8080,
    host: true,
    origin: 'http://0.0.0.0:8080',
  },
  define: {
    'process.env': {},
  },
});
