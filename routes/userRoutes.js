const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser
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

router.post('/login', (req, res) => {

  console.log('userLogin', req.body);
  loginUser(req.body)
    .then(result => {
      // req.session.user_id = result.
      console.log('loggedInRes', result);
      req.session.user_id = result[0].id;
      res.json(result)
    })
})

router.get('/logged_in', (req, res) => {

  const userID = req.session.user_id;
  res.json({ userID });
})

module.exports = router;