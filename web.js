var express = require('express');
var app = express();
var nerveGraph = require('./webgraph')

app.set('view engine','jade');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('index', {graph: nerveGraph.graph});
})

var PORT = 3000;
app.listen(PORT,function(){
    console.log('port: ' + PORT);
})