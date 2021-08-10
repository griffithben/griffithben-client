const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#59a947',
              '@body-background': '#999999',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};