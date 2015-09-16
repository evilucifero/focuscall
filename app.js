var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var express = require('express');  
var app = express();  
var nowNum = 0;

app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);  
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res){
  res.render('show');
});
app.get('/show', function(req, res){
  res.render('show');
});
app.get('/call', function(req, res){
  res.render('call');
});
app.get('/print', function(req, res){
  res.render('print');
});
app.get('/519700', function(req, res){
  res.render('519700');
});

app.get('/api/requestcall', function(req, res){
  res.send(JSON.stringify({
    callNum: nowNum
  })).end();
});
app.get('/api/nextcall', function(req, res){
  res.send(JSON.stringify({
    callNum: ++nowNum
  })).end();
});
app.get('/api/nowcall', function(req, res){
  res.send(JSON.stringify({
    callNum: nowNum
  })).end();
});
app.get('/api/setcall', function(req, res){
  nowNum = req.query.nowNum;
  res.send(JSON.stringify({
    callNum: nowNum
  })).end();
});

app.listen(20205, function() {
  console.log('Listening on port 20205.');
});
