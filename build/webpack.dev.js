const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackDevConfig = {
    mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.

    entry: "../src/entry.ts", // string | object | array  // 这里应用程序开始执行
    // webpack 开始打包

    output: {
        // webpack 如何输出结果的相关选项

        path: path.resolve(__dirname, "../dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

        publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面

        library: "MyLibrary", // string,
        // 导出库(exported library)的名称

        libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型

        /* 高级输出配置（点击显示） */
    },

    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ],
    },

    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）
        modules: [
            "node_modules",
        ],
        // 用于查找模块的目录
        extensions: [".js", ".json", ".jsx", ".css", "ts", "tsx"],
        // 使用的扩展名
    },
    devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    // 牺牲了构建速度的 `source-map' 是最详细的。
    context: __dirname, // string（绝对路径！）
    // webpack 的主目录
    // entry 和 module.rules.loader 选项
    // 相对于此目录解析
    target: "web", // 枚举  // 包(bundle)应该运行的环境
    // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
    //externals: ["react", /^@angular\//],  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
    stats: "errors-only",  // 精确控制要显示的 bundle 信息
    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, '../dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: '../index.template.html',
            inject: true
        })
        // ...
    ],
    // 附加插件列表
}

module.exports = new Promise((resolve, reject) => {
    resolve(webpackDevConfig)
})