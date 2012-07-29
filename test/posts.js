var assert = require('assert'),
  Browser = require('zombie'),
  server = require('../server');

describe('app/posts', function(){
  var browser = new Browser();
  it('#index', function(done){
    browser.visit('http://localhost:3000/').then(function(){
      console.log(browser.text('body'));
      done();
    });
  });
  it('#posts', function(done){
    browser.visit('http://localhost:3000/posts').then(function(){
      console.log(browser.text('body'));
      done();
    });
  })
});