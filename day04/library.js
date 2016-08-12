var _ = require('lodash'),
    fs = require('fs'),
    crypto = require('crypto');

var input = fs.readFileSync('input.txt', 'utf8').trim();

module.exports = {
    one : function() {
        var md5 = require('md5');
        console.log(md5('message'));
        //console.log(data);
    }
};
