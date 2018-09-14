const path = require("path");

module.exports = {
    entry: {
        index: "./src",
        bin_vladnet: "./src/bin/bin_vladnet"
    },
    mode: "development",
    devtool: "source-map",
    target: "node",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        globalObject: "this",
    },
    watchOptions: {
        poll: true,
        ignored: [
            /node_modules([\\]+|\/)+(?!@vladnet)/,
            /d\.ts/,
        ],
    },
};
