'use strict';
// note: this is the revealing module pattern

/**
 * Module dependencies.
 */
// none.

/**
 * Returns a new `Syllabify` object.
 */
var Syllabify = (function() {

	var getUnits = function (word) {

		var syllables = [];

		// rules for syllables
		// First, count the number of vowels
		// Then, where there are two or more vowels in succession, identify pairs of vowels that form diphthongs
		// Next, counting each diphthong as one vowel sound, and every other vowel as a vowel sound, count the total number of vowel sounds. This is the number of syllables in the word.

		return syllables;
	};

})();

module.exports = Syllabify;
