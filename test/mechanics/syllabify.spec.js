var expect = require('expect');
var Syllabify = require('../../lib/mechanics/syllabify');

describe('getUnits', function() {

	it('should return the correct two syllables for the word λυω (without accent)', function() {
		var actual = Syllabify.getUnits('λυω');

		var expected = ['λυ', 'ω'];
		expect(actual).toEqual(expected);
	});

	it('should return the correct four syllables for the word ἐλυόμην', function() {
		var actual = Syllabify.getUnits('ελυομην');

		var expected = ['ε', 'λυ', 'ο', 'μην'];
		expect(actual).toEqual(expected);
	});

});
