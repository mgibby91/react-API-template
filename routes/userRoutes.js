const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  registerUser
} = require('../lib/userQueries');

router.get('/', (req, res) => {

  getAllUsers()
    .then(result => {
      res.json(result)
    })
});

router.post('/register', (req, res) => {

  console.log('userPostRes', req.body);
  registerUser(req.body)
    .then(result => {
      res.json(result)
    })

})

module.exports = router;