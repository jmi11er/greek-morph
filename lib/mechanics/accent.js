'use strict';
// note: this is the revealing module pattern

/**
 * Module dependencies.
 */
var Syllabify = require('./syllabify');

/**
 * Returns a new `Accent` object.
 */
var Accent = (function () {

	/**
	 * Remove accents from a given 'word'.
	 */
	var removeAccent = function (word) {
		// remove the accent marks
		return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	};

	/**
	 * Add accent, given a composed 'word' and it's lexical form.
	 */
	var addAccent = function (word, lexicalForm) {
		var accentedWord = '';

		// accent rules dependent on syllables
		var syllableArray = Syllabify.getUnits(word);

		// types of accents: Acute, Grave, Circumflex
		// accent rules:
		// an accent only goes on a vowel
		// 1. only the last three syllables may hold the accent
		// 	a) this means we are going to break the word into syllables (see below)
		// 2. an Acute accent may stand on any of the three syllables
		// 3. a Circumflex may stand only on the last two syllables
		// 		a) circumflex may only stand on a long syllable
		//		b) circumflex can only be on the penult syllable if penult is long and ultima is short
		// 4. a Grave may stand only on the last syllable
		// 5. the antepenult syllable can have the accent only if the ultima syllable is short
		// 6. an acute on the ultima is changed to a grave when the word is followed immediately by another word
		//		without an intervening punctuation mark (this will only apply if we put words together later)
		// 7. for verbs, the accent will want to move to the syllable closest to the front of the word
		// 8. there are accent rules for nouns and adjectives too (don't worry about that for now)



		// The rules don't tell us where the accent goes, however. Must start with lexical form
		// what syllable was the accent on for the lexical form?

		// get the position that the accent is in.
		var accentPosition = 0;
		var accentedChar = '';

		for (var charPos = 0; charPos < lexicalForm.length; charPos++) {
			var characterToCheck = lexicalForm.charAt(charPos);
			if (characterToCheck.normalize('NFD').match(/[\u0300-\u036f]/g)) {
				// this char has the accent, mark the location
				accentPosition = charPos;
				// get the accented char so we can check the type of accent
				accentedChar = characterToCheck.normalize('NFD');
				console.log('accentedChar: ', accentedChar);
			}
		}

		// what type of accent?
		// extract to method
		console.log('accentedChar equals acute?: ', accentedChar.match(/[\u0301]/g) ? true : false);


		// strip the accent from the lexical form and get the number of syllables
		var lexicalSyllableArray = Syllabify.getUnits(removeAccent(word));
		console.log('lexicalSyllableArray: ', lexicalSyllableArray);

		// step through the characters of the returned lexical form syllable array and get the syllable that had the accent
		//let unicodeArray = [];
		var syllableWithAccent = 0;
		var currentPosition = 0;

		// loop through the array of syllables
		lexicalSyllableArray.forEach(function(syllable, index) {

			// loop through each char of the syllable
			for (var charIndex = 0; charIndex < syllable.length; charIndex++) {

				if (currentPosition === accentPosition) {
					// get the syllable where the accent occurs
					syllableWithAccent = index;
				}

				currentPosition++;

			}
		});

		console.log('syllable with accent is: ', syllableWithAccent);




		// add accent marks here
		//accentedWord = word;
		accentedWord = 'λύω';

		// return index;
		return unicodeArray;
		//return lexicalSyllableArray;
	}

	return {
		removeAccent: removeAccent,
		addAccent: addAccent
	};

})();

module.exports = Accent;
