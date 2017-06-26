// import expect from 'expect';
var expect = require('expect');
var greekMorph = require('../lib/greek-morph');

describe('getVerbalStem', function() {

	it('should get the present stem of a v-1a verb where the verbal root ends in upsilon', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '1s');
		var actual = composerObj.getVerbalStem();
		var expected = 'λυ';
		expect(actual).toEqual(expected);
	});

});
