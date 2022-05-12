const mongoose = require('mongoose')
const request = require('supertest')
const { app } = require('../index')
require('dotenv').config()


describe('remote-server tests launched', function() {

  this.timeout(10000);

  beforeEach(() => {
    date = new Date();
  });

  after(() => {
    console.log("Tests finished");
  });

  afterEach(() => {
    console.log("At", date);
  });

  it('should connect to mongodb database', done => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
      done();
    }, err => {
      throw new Error(err.message);
    })
  });

  it('should return root of remote server', done => {
    request(app).get(`/leavemealone`).then(res => {
      done();
    });
  });
});
