import * as esbuild from 'esbuild'

// ========== start esbuild ==========
await esbuild.build({
  entryPoints: ['./src/**/*.ts'],
  outdir: 'out',
  bundle: true,
  target: 'node18',
  platform: 'node',
  minify: true,
})
