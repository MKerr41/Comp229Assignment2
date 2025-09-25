/*
  File: index.js
  Author: Mason Kerr
  Student ID: 301517873
  Date: September 25
  Description: JS destination file
*/

var express = require('express');
var router = express.Router();

//Home
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

//About
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

//Projects
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

//Services
router.get('/services', function(req, res) {
  res.render('services', { title: 'Services' });
});

//Contact
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
