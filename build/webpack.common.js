const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        // Automatically creat an index.html with the right bundle name and references to our javascript.
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    // Entrypoint for our game
    entry: './src/index.ts',
    module: {
        rules: [
            {
                // Load our GLSL shaders in as text
                test: /.(glsl|vs|fs|vert|frag)$/, exclude: /node_modules/, use: ['raw-loader']
            },
            {
                // Process our typescript and use ts-loader to transpile it to Javascript
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}
