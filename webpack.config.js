const {share, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  shared: {
    ...share(
      {
        "rxjs": {singleton: true, strictVersion: true, requiredVersion: '7.8.1'},
      }
    ),
  },
});
