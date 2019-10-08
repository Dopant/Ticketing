var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = require('../app');
var url = require ('url');
var path = require('path');
var session = require('express-session');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/homepage', function(req, resp, next) {
      resp.sendFile(path.join(__dirname + '/homepage-1.html'))
  
     // return next();
});

router.get('/full-event-schedule.html', function(req, resp, next) {
  resp.sendFile(path.join(__dirname + '/full-event-schedule.html'))

 // return next();
});

router.get('/artist-page.html', function(req, resp, next) {
  resp.sendFile(path.join(__dirname + '/artist-page.html'))

 // return next();
});

router.get('/event-by-category.html', function(req, resp, next) {
  resp.sendFile(path.join(__dirname + '/event-by-category.html'))

 // return next();
});

router.get('/gallery.html', function(req, resp, next) {
  resp.sendFile(path.join(__dirname + '/gallery.html'))

 // return next();
});

router.get('/select-seat-2.html', function(req, resp, next) {
  resp.sendFile(path.join(__dirname + '/select-seat-2.html'))

 // return next();
});

//full-event-schedule.html
module.exports = router;
