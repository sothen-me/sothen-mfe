const { ModuleFederationPlugin } = require('webpack').container
require('dotenv').config({ path: './.env' })
const { merge } = require('webpack-merge')
const commonWebpack = require('@sothen-mfe/webpack/react.config')

const deps = require('./package.json').dependencies

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return merge(commonWebpack, {
    mode: process.env.NODE_ENV || 'development',
    devServer: {
      port: 3000,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          remote1: isProduction ? process.env.PROD_APP1 : process.env.DEV_APP1,
          remote2: isProduction ? process.env.PROD_APP2 : process.env.DEV_APP2,
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
    ],
  })
}
