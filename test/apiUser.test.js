'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

// describe('empty the database collection', () => {
//   beforeEach((done) => { //Before each test we empty the database
//       article.remove({}, (err) => {
//          done();
//       });
//   });
// })


//Test script for get article lists
describe('user list', function() {
  it('should return the respond json which contains the list of users from database', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/user')
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

//get single article by slug
describe('get single user by username', function() {
  let username = 'admin';
  it('should return a single article based on slug', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/article/'+username)
    .end(function (err, res) {
      res.should.be.json;
      res.should.have.status(200);
      res.body.slug.should.equal('hello-world');
      done();
    })
  })
})

describe('register a new user', function() {
  it('should store a new user data to database and return a session', function(done) {
    chai.request('http://localhost:3000')
      .post('/api/user')
      .send({
        name: 'Septian Adhi Tama',
        email: 'tama@tamatamvan.web.id',
        username: 'tamatamvan',
        password: 'tamatamvan'
      })
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.session.should.be.json;
      })
  })
})


describe('user login', function() {
  it('should authenticate user, save a session if username and password correct according to database', function(done) {
    chai.request('http://localhost:3000')
      .post('/api/user/login')
      .send({
        username: 'tamatamvan',
        password: 'tamatamvan'
      })
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.session.should.be.json;
      })
  })
})
