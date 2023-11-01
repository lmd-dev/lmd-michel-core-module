const path = require("node:path");

const mode = "production";

module.exports = [{
    name: "Core Module Builder",
    mode: mode,
    target: "node",
    entry: path.resolve(__dirname, "src") + "/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        libraryExport: 'default'
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
    }
}]