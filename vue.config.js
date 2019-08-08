const path = require("path")
module.exports = {
    // baseUrl:"./",//打包文件的时候是绝对地址
    // publicPath:"./",
    devServer:{
    //     host:"127.0.0.1",
    //     port:8080,
    //     open:true,
    //     proxy:{
    //         "/api":{
    //             target:"http://39.97.33.178",
    //             secure: false,
    //             changeOrigin:true
    //         }
    //     }
        proxy: {
            '/api': {
                target: 'http://m.piaoniu.com',
                changeOrigin: true,
            }

        },

    },
    // configureWebpack:{
    //     resolve:{
    //         alias:{
    //             "@":path.join(__dirname,"./src"),
    //             "api":path.join(__dirname,"./src/api"),
    //             "components":path.join(__dirname,"./src/components"),
    //             "views":path.join(__dirname,"./src/views"),
    //             "common":path.join(__dirname,"./src/common"),
    //             "utils":path.join(__dirname,"./src/utils"),
    //             "router":path.join(__dirname,"./src/router"),
    //             "store":path.join(__dirname,"./src/store")
    //         }
    //     }
    // }
}