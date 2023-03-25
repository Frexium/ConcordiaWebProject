// eslint-disable-next-line no-unused-vars
const { defineConfig } = require('@vue/cli-service')
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                pathRewrite: {'^/api' : ''}
            }
        }
    }
}

