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

	var VERBLIST = ['α','ε','η','ι','ο','υ','ω'];

	// a diphthong is two vowels that produce one sound. The second vowel is always an iota or upsilon
	// can also be made up of a vowel and an iota subscript (should not apply)
	// a diaeresis placed over the second vowel in one of these combos makes it NOT a diphthong
	var DIPHTHONGS = ['αι','ει','οι','αυ','ου','υι','ευ','ηυ'];


	var getUnits = function (word) {

		var syllables = [];

		// rules for syllables
		// 1. count the number of vowels
		// 2. where there are two or more vowels in succession, identify pairs of vowels that form diphthongs
		// 3. count the total number of vowel sounds. This is the number of syllables.
		// 4. a single consonant by itself (and clusters that can be pronounced together) goes with the following vowel, unless this is the last syllable (there is no following vowel)
		// 5. a consonant cluster that cannot be pronounced together is divided, and the first consonant goes with the preceeding vowel
		// 6. double consonants are divided
		// 7. compound words are divided where joined (not applicable)

		for (var itr = 0, len = word.length; itr < len; itr++) {

			var letter = word.charAt(itr);

			// not the first letter of the word
			if (itr !== 0) {

				// if the letter is a consonant
				if (VERBLIST.indexOf() === -1) {
					// if the previous letter was a vowel
					// syllables.push(letter);  // however if there is no preceeding vowel this will have to come back
				} else {
					// this is a vowel
					// if the previous letter was a vowel and this is not a diphthong
					// syllables.push(letter);

					// if the previous letter was a vowel and this is a diphthong,
					// or if the previous letter was a consonant
					// add the vowel to the current syllable
					// syllables[syllables.length] = syllables[syllables.length] + letter;
				}

			} else {
				// this is the first letter in the word, itr === 0
				syllables.push(letter);
			}
		}

		return syllables;
	};

	return {
		getUnits: getUnits
	};

})();

module.exports = Syllabify;
