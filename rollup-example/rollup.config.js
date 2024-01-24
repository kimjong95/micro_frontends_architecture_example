const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.mjs",
      format: "es",
    },
  ],
  plugins: [commonjs(), babel({ babelHelpers: "bundled" }), terser()],
};
