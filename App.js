'use strict';

//module.exports = require('./lib/greek-morph');

var test = Composer('λύω', 'present', 'active', 'indicative', '1s');
console.log('test: ', test);

var connVowel = test.getConnectingVowel();
console.log('connVowel: ', connVowel);
