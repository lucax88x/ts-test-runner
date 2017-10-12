const path = require('path');

module.exports = {
    entry: './src/sample.spec.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'tests.js',
        path: path.resolve(__dirname, 'dist')
    }
};