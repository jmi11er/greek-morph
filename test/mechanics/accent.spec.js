var expect = require('expect');
var Accent = require('../../lib/mechanics/accent');

describe('removeAccent', function() {

	it('should remove the accent from the word λύω', function() {
		var actual = Accent.removeAccent('λύω');

		var expected = 'λυω';
		expect(actual).toEqual(expected);
	});

});
