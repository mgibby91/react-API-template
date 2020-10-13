
require('dotenv').config();

// Node server
const PORT = process.env.PORT || 8085;
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Database connection
const { Pool } = require('pg');
const { dbParams } = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect(() => {
  console.log('Connected to the db');
});

// Server routes
const routes1 = require('./routes/routes1');

app.use('/api', routes1);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
})