// module imports
const express = require('express');
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// file imports
const swaggerDefinition = require('../docs/swagger-def');

// variable initializations
const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: [path.join(__dirname, '../docs/components.yml'), path.join(__dirname, '../routes/*.js')],
});

router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;
