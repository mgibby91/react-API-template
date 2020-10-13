const express = require('express');
const router = express.Router();

const {
  userQuery1
} = require('../lib/userQueries');

router.get('/', (req, res) => {

  userQuery1()
    .then(result => {
      res.json(result)
    })
});

module.exports = router;