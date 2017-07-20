var expect = require('expect');
var Accent = require('../../lib/mechanics/accent');

describe('removeAccent', function() {

	it('should remove the accent from the word λύω', function() {
		var actual = Accent.removeAccent('λύω');

		var expected = 'λυω';
		expect(actual).toEqual(expected);
	});

});

describe('addAccent', function() {

	it('should add an acute accent to the word λυω to form λύω', function() {
		var actual = Accent.addAccent('λυω', 'λύω');

		var expected = 'λύω';
		expect(actual).toEqual(expected);
	});

});
