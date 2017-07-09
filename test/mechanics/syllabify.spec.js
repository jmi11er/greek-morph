var expect = require('expect');
var Syllabify = require('../../lib/mechanics/syllabify');

describe('removeAccent', function() {

	it('should return an array of two syllables for the word λύω', function() {
		var actual = Syllabify.getUnits('λύω');

		var expected = ['λυ', 'ω'];
		expect(actual).toEqual(expected);
	});

});
