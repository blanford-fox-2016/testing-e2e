let passport = require('passport');
let User = require('../models/users');
// let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

let allUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
}

let register = (req, res, next) => {
  User.register({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username
  }, req.body.password, (err, user) => {
    if (err) {
      res.send({ alert: 'Oh, snap! Your regisration was unsuccessfull!'})
    } else {
      // res.render('index', { alert: 'Congrats! Your regisration was successfull!', data: req.session});

      passport.authenticate('local')(req, res, function () {
        res.status(200).json(user);
      })
    }
  })
}

let getSingleUser = (req, res, next) => {
  User.findOne({
    username: req.params.username
  }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  })
}

module.exports = {
  allUsers: allUsers,
  register: register,
  getSingleUser: getSingleUser
}
