import path from 'path';
import fs from 'fs/promises';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [
    react(),
    // babel({
    //   babelConfig: {
    //     presets: ['@babel/preset-react'],
    //   },
    // }),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  server: {
    port: 5032,
  },
  preview: {
    port: 5032,
  },
});
