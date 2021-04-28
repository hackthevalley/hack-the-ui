import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: `./dist/index.esm.js`,
      format: 'es',
    },
  ],
  external: {
    react: 'React',
  },
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    babel({ exclude: 'node_modules/**' }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
  ],
};
