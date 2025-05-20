const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Common configuration for both UMD and ESM builds
const commonConfig = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "autoprefixer",
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
        ],
    },
};

// UMD build configuration (default)
const umdConfig = {
    ...commonConfig,
    entry: {
        'stage-form-creator': './src/form.ts',
        'brackets-viewer': './src/index.ts',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'brackets-viewer.min.css',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        library: {
            name: 'bracketsViewer',
            type: 'umd',
            export: 'default',
        },
        globalObject: 'this'
    },
};

// ESM build configuration
const esmConfig = {
    ...commonConfig,
    entry: {
        'brackets-viewer.esm': './src/index.ts',
    },
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: {
            type: 'module',
        },
    },
};

// Export an array of configurations
module.exports = [umdConfig, esmConfig];
