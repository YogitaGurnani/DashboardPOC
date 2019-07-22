'use strict';

var xsenv = require('@sap/xsenv');
var express = require('express');
var app = express();

require('https').globalAgent.options.ca = xsenv.loadCertificates();
app.use('/',express.static(__dirname + '/resources'));

app.listen(process.env.PORT, function(){
    console.log('SAP AC frontend listening on port ' + process.env.PORT);
});