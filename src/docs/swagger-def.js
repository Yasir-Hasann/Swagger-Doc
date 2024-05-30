const { version } = require('../../package.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'The Authentication API documentation',
    version,
    description: 'The Authentication App',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 5001}/api/v1`,
      description: 'Local Server',
    },
    {
      url: '<your_live_server_url>',
      description: 'Live Server',
    },
  ],
};

module.exports = swaggerDef;
