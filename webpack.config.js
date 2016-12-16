module.exports = {
  entry: ["./src/app/typescript/clock.ts","./src/app/typescript/main.ts"],
  output: {
    filename: "src/app/javascript/bundle.js"
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader` 
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  watch: true
}
