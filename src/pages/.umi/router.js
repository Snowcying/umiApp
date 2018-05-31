import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/page1",
        "exact": true,
        "component": () => React.createElement(require('/Users/Snowcying/.config/yarn/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/page1' })
      },
      {
        "path": "/page2",
        "exact": true,
        "component": require('../page2/index.js').default
      },
      {
        "component": () => React.createElement(require('/Users/Snowcying/.config/yarn/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.js","routes":[{"path":"/page1","exact":true,"component":"./src/pages/page1/index.js"},{"path":"/page2","exact":true,"component":"./src/pages/page2/index.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
