/**
 * vue.config 配置
 * @author ynzhang
 */
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")
    // const fs = require('fs')
    // __dirname 总是指向被执行 js 文件的绝对路径
const resolve = dir => {
    return path.join(__dirname, dir);
};
const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/' :
    '/';
module.exports = {
    configureWebpack: config => {
        return {
            plugins: [
                new CompressionPlugin({
                    test: /\.js$|\.html$|.\css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据压缩
                    deleteOriginalAssets: false //不删除源文件
                })
            ]
        }
    },
    css: {
        extract: false,
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem-exclude')({
                    remUnit: 37.5,
                    exclude: /(node_module)/,
                })]
            },
        }
    },
    chainWebpack: config => {

        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/assets/icons'))
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_conf', resolve('config'));
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .use('url-loader')
            .loader('file-loader')
            .options({
                name: 'assets/img/[name].[ext]'
            });
    },
    assetsDir: 'assets', //静态资源目录(js,css,img,fonts)这些文件都可以写里面
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 输出文件目录
    outputDir: 'maybe',
    // webpack-dev-server 相关配置
    devServer: {
        // 设置主机地址
        host: '0.0.0.0',
        // 设置默认端口
        port: 8080
            // 设置代理
            // proxy: {
            //   '/api': {
            //       target: '',//目标地址
            //       ws: true, //// 是否启用websockets
            //       changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            //       pathRewrite: {'^/api': ''}    //这里重写路径
            //   }
            // }
    }
};