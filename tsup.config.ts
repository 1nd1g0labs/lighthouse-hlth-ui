import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'framer/index': 'src/framer/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'framer-motion'],
  treeshake: true,
  splitting: false,
  minify: false,
  // Copy styles.css to dist folder
  onSuccess: 'cp src/styles.css dist/styles.css',
});
