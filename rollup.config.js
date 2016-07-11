import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/app.js',
  format: 'cjs',
  dest: 'src/bundle.js', // equivalent to --output,
  plugins: [ babel() ]
};
