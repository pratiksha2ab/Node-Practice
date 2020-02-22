var express = require('express');
var app = express();

app.listen(3000, function(err){
    if(err){
        console.log('error');

    }
    else{
        console.log('listening to port  3000');
    }
})