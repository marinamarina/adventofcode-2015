'use strict';
var _ = require('lodash'),
    crypto = require('crypto');

module.exports = {
    part1 : function(input) {
        var md5 = require('md5');
        return md5('message');
    }
};
