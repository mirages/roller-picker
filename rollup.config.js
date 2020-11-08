import ts from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const pkg = require('./package.json')
const banner = `
/*!
 * ${pkg.name}
 * v${pkg.version}
 * by ${pkg.author}
 */
`

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'lib-starter',
      banner
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      banner
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    ts({
      sourceMap: false
    }),
    terser({
      output: {
        comments: (node, comment) => {
          const text = comment.value
          const type = comment.type
          if (type == 'comment2') {
            // multiline comment
            return /^!/.test(text)
          }
        }
      }
    })
  ]
}
