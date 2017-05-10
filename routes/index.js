var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  res.redirect('/users')
})

router.get('/users', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', (req, res) => {
  db.getUser(req.params.id, req.app.get('connection'))
    .then(user => {
      res.render('profile', user[0])
    })
})

module.exports = router
