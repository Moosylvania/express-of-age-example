var express = require('express'), app = module.exports = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ofAge = require('express-of-age');

app.use(cookieParser());
app.use(bodyParser({extended:true}));
app.use(ofAge({url:'/agegate', age:21}));

app.get('/', function(req, res){
    return res.send('You passed the agegate');
});

app.use('/agegate', function(req, res){
    return res.sendfile('agegate.html');
});

app.listen(3000);
