var express = require('express');
var app = new express();
// 加载hbs模块
var hbs = require('hbs');

app.use(express.static('public'));

// 指定模板文件的后缀名为html
app.set('view engine', 'html');

// 运行hbs模块
app.engine('html', hbs.__express);
//app.use(express.bodyParser());

app.get('/', function(req, res) {
   res.render('dpdf');
});


app.listen(1234);
