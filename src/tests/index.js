const mongoose = require('mongoose')
const express = require('express');
const axios = require('axios');
require('dotenv').config()


describe('remote-server tests launched', function() {
  var app,
      date;

  this.timeout(15000);

  before((done) => {
    app = express();
    app.listen(process.env.SERVER_PORT, (err) => {
      if (err) { return done(err); }
      done();
    });
  });

  beforeEach(() => {
    date = new Date();
  });

  after(() => {
    console.log("Tests passed successfully");
  });

  afterEach(() => {
    console.log("At", date);
  });

  it('should connect to mongodb database', (done) => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
      done();
    }, err => {
      throw new Error(err.message);
    })
  });
  
  it('should connect to aws api', (done) => {
    
  });

});
