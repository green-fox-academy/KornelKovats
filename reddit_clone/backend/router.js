const controller = require('./controllers/controller.js');

const route = (app) => {
  app.use('/api', controller);
};

module.exports = route;
