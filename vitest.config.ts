import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    css: true,
    setupFiles: './test/setupTests.ts',
    include: ['./test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  plugins: [react(), viteTsconfigPaths(), cssInjectedByJsPlugin()],
  define: {
    'process.env': {},
  },
});
