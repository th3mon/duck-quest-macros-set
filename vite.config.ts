import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  root: 'src/',
  base: '/modules/duck-quest-macros-set/',
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    port: 30001,
    open: true,
    proxy: {
      '^(?!/modules/duck-quest-macros-set)': 'http://localhost:30000/',
      '/socket.io': {
        target: 'ws://localhost:30000',
        ws: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'duck-quest-macros-set',
      entry: path.resolve(__dirname, 'src/duck-quest-macros-set.ts'),
      formats: ['es'],
      fileName: 'duck-quest-macros-set',
    },
  },
};

export default config;
