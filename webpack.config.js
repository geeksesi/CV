const path = require('path');

const config = {
    entry: {
        app: './src/app.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: ['public_html/assets/*.js', 'doc/assets/*.js', 'node_modules'],
    },
}
module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.output = {
            path: path.resolve(__dirname, 'public_html/build'),
            publicPath: '/public_html/build/',
            filename: '[name].bundle.js'
        }
    }

    if (argv.mode === 'production') {
        config.output = {
            path: path.resolve(__dirname, 'doc/build'),
            publicPath: '/doc/build/',
            filename: '[name].bundle.js'
        }
    }

    return config;
};