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
      console.log('reg result', result)
      req.session = result[0];
      res.json(result)
    })
})

router.post('/login', (req, res) => {

  console.log('userLogin', req.body);
  loginUser(req.body)
    .then(result => {
      // req.session.user_id = result.
      console.log('loggedInRes', result);
      req.session = result[0];
      res.json(result)
    })
    .catch(err => {
      res.send(err);
    })
})

router.get('/logged_in', (req, res) => {

  const userData = req.session;
  res.json({ userData });
})

router.get('/logout', (req, res) => {

  console.log('hiiii');
  req.session = null;
  console.log('req.session', req.session);

  res.json({ userData: req.session });

})

module.exports = router;