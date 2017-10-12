const wallabyWebpack = require('wallaby-webpack');
const path = require('path');

module.exports = function (wallaby) {

  const webpackConfiguration = {
    entryPatterns: [
      'src/**/*spec.js'
    ],

    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader', include: /node_modules/, query: { tsConfigPath: 'tsconfig.json' } },
      ]
    },

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        path.join(wallaby.projectCacheDir, 'src')
      ]
    }
  };

  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.spec.ts', ignore: true }
    ],
    tests: [
      { pattern: 'src/**/*.spec.ts', load: false }
    ],

    env: {
      kind: 'electron'
    },

    compilers: {
      'src/**/*.ts': wallaby.compilers.typeScript()
    },

    postprocessor: wallabyWebpack(webpackConfiguration),

    testFramework: 'jasmine',
    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
