import * as esbuild from 'esbuild'

// ========== start esbuild ==========
await esbuild.build({
  entryPoints: ['./src/**/*.ts'],
  outdir: 'out',
  bundle: true,
  target: 'node20',
  platform: 'node',
  minify: true,
  packages: "external"
})
