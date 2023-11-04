const path = require("node:path");

const mode = "production";

module.exports = [{
    name: "Core Module Builder",
    mode: mode,
    entry: path.resolve(__dirname, "src") + "/index.ts",
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            type: "module"
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: "ts-loader",
                    options: { configFile: `tsconfig.json` }
                }],
                exclude: /node_modules/
            }
        ]
    },
    experiments: {
        outputModule: true
    }
}]