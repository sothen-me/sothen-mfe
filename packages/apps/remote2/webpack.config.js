const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const commonWebpack = require('@sothen-mfe/webpack/react.config')

const deps = require('./package.json').dependencies

module.exports = merge(commonWebpack, {
  devServer: {
    port: 3002,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
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
