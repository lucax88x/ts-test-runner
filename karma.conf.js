module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-mocha-reporter'),
            require('karma-electron-launcher'),
        ],
        reporters: ['progress', 'mocha'],
        files: [
            'src/test.js'
        ],
        browsers: ['Electron'],
    })
}