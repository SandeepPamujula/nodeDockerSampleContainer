
'use strict'

const express = require('express');

const PORT = 8080;

const app = express();
//app.get('/',)
app.get('/',function(req,res){
    console.log("hi..");
    res.write("hi there\n");
    res.end();
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
