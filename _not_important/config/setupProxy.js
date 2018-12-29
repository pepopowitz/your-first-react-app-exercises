const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:2999/',
      pathRewrite: { '^/api': '' },
    })
  );
};
