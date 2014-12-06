var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var express = require('express');  
var app = express();  
var nownum = 0;

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
app.get('/api/requestcall', function(req, res){
    var requestcall = {
      call_num:nownum
    };
    res.send(JSON.stringify(requestcall)).end();
});
app.get('/api/nextcall', function(req, res){
    nownum++;
    var nextcall = {
      call_num:nownum
    };    
    res.send(JSON.stringify(nextcall)).end();
});
app.get('/api/nowcall', function(req, res){
    var nowcall = {
      call_num:nownum
    };    
    res.send(JSON.stringify(nowcall)).end();
});
app.listen(20205, function() {
    console.log('Listening on port 20205.');
});
