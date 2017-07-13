'use strict';
// note: this is the revealing module pattern

/**
 * Module dependencies.
 */
// None.

/**
 * Returns a new `Syllabify` object.
 */
var Syllabify = (function() {
	// the Koine Greek vowels
	var VOWELS = ['α','ε','η','ι','ο','υ','ω'];
	// a diphthong is two vowels that produce one sound. The second vowel is always an iota or upsilon
	// can also be made up of a vowel and an iota subscript (should not apply)
	// a diaeresis placed over the second vowel in one of these combos makes it NOT a diphthong
	var DIPHTHONGS = ['αι','ει','οι','αυ','ου','υι','ευ','ηυ'];
	// consonants that can be pronounced together, will add to this list as we go...
	var FRIENDCONS = ['σκ'];

	// rules for syllables
	// 1. count the number of vowels
	// 2. where there are two or more vowels in succession, identify pairs of vowels that form diphthongs
	// 3. count the total number of vowel sounds. This is the number of syllables.
	// 4. a single consonant by itself (and clusters that can be pronounced together) goes with the following vowel, unless this is the last syllable (there is no following vowel)
	// 5. a consonant cluster that cannot be pronounced together is divided, and the first consonant goes with the preceeding vowel
	// 6. double consonants are divided
	// 7. compound words are divided where joined (not applicable)

	var getUnits = function (word) {
		// NOTE: the word passed in must not contain accents, planning to fix this later.
		var syllables = [];

		for (var itr = 0, len = word.length; itr < len; itr++) {
			var letter = word.charAt(itr);
			var prevLetter = word.charAt(itr-1);
			var nextLetter = word.charAt(itr+1);

			// ****************
			// first letter in a word always starts a new syllable
			// if there is a vowel before you, start a new syllable
			// three exceptions:
			//		1. you are a consonant, and there is a consonant that comes after you that is not friendly
			//		2. you are a consonant and there are no vowels after you in the word
			//		3. you are the second vowel in a diphthong
			// else there is a consonant before you, add to the current syllable
			// one exception:
			//		1. if the same consonant came just before you, double consonants are divided
			// ****************

			// if not the first letter of the word
			if (itr !== 0) {
				// if the letter before you is a vowel, start a new syllable with 3 exceptions
				if (VOWELS.indexOf(prevLetter) !== -1) {
					// you are a consonant
					if (VOWELS.indexOf(letter) === -1) {
						// exception #1
						// the next letter is a consonant but cannot be pronounced with you
						if (FRIENDCONS.indexOf(letter+nextLetter) !== -1) {
							// this letter will be appended to the current syllable
							syllables[syllables.length-1] = syllables[syllables.length-1] + letter;
						} else {
							// start a new syllable
							syllables.push(letter);
						}


					// else you are a vowel
					} else {
						// exception #3
						// you are the second vowel in a dipthong, so keep with the current syllable
						if (DIPHTHONGS.indexOf(prevLetter+letter) !== -1) {
							// this letter will be appended to the current syllable
							syllables[syllables.length-1] = syllables[syllables.length-1] + letter;
						} else {
							// default operation:
							// start a new syllable
							syllables.push(letter);
						}
					}

				// the letter before you is a consonant
				} else {
					// if there is a consonant before you, add to the current syllable, with one exception
					// exception #1: the same consonant came just before you, double consonants are divided
					if (prevLetter === letter) {
						// start a new syllable
						syllables.push(letter);
					} else {
						// default operation:
						// this letter will be appended to the current syllable
						syllables[syllables.length-1] = syllables[syllables.length-1] + letter;
					}
				}

			// this is the first letter in the word, start a new syllable
			} else {
				syllables.push(letter);
			}

		}

		// exception #2
		// you are a consonant and there are no vowels after you in the word

		// if last array element contains only consonants, append the last element to the prior element
		// a syllable must have a vowel
		// get last element from syllables array
		var lastSyllable = syllables[syllables.length-1];
		// check the array of vowels against the last syllable to see if any are in our string
		if (!VOWELS.some(function(vl) { return lastSyllable.indexOf(vl) !== -1 })) {
			// the last 'syllable' has no vowel. append these consonants to the last real syllable.
			var consonantsToCopy = syllables.pop();
			syllables[syllables.length-1] = syllables[syllables.length-1] + consonantsToCopy;
		}

		return syllables;
	};

	return {
		getUnits: getUnits
	};

})();

module.exports = Syllabify;
