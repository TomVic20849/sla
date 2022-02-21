var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = [
    {name: "Tomás", password:"NelioIsGod"},
    {name: "monengue", password:"123"}];
  
    res.send(users);
});

module.exports = router;
