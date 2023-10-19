import nodemon from 'nodemon'
import * as esbuild from 'esbuild'

// ========== start esbuild ==========
const ctx = await esbuild.context({
  entryPoints: ['./src/**/*.ts'],
  outdir: 'out',
  bundle: true,
  target: 'node18',
  platform: 'node',
  minify: false,
})

await ctx.watch()
// ========== end start esbuild ==========

// ========== start nodemon ==========
nodemon({
  script: './out/index.js',
  ext: 'js json',
  watch: ['./out/index.js'],
  env: {
    NODE_ENV: 'development',
  },
})

nodemon
  .on('start', function () {
    console.log('App has started')
  })
  .on('quit', function () {
    console.log('App has quit')
    process.exit()
  })
  .on('restart', function (files) {
    console.log('App restarted due to: ', files)
  })
  .on('crash', () => {})
