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
	 * Types of accents: Acute, Grave, Circumflex
	 * accent rules:
	 * Note: an accent only goes on a vowel
	 * 	1. only the last three syllables may hold the accent
	 * 		a) this means we are going to break the word into syllables (see below)
	 * 	2. an Acute accent may stand on any of the three syllables
	 * 	3. a Circumflex may stand only on the last two syllables
	 * 		a) circumflex may only stand on a long syllable
	 * 		b) circumflex can only be on the penult syllable if penult is long and ultima is short
	 * 	4. a Grave may stand only on the last syllable
	 * 	5. the antepenult syllable can have the accent only if the ultima syllable is short
	 * 	6. an acute on the ultima is changed to a grave when the word is followed immediately by another word
	 * 		 without an intervening punctuation mark (this will only apply if we put words together later)
	 * 	7. for verbs, the accent will want to move to the syllable closest to the front of the word
	 * 	8. there are accent rules for nouns and adjectives too (don't worry about that for now)
	 */
	var addAccent = function (composedWord, lexicalForm) {
		var accentedWord = '';
		var accentPosition = 0;
		var accentedChar = '';
		var accentType = '';

		// The rules don't tell us where the accent goes.
		// Start with lexical form
		// 1. get the character that the accent is in on the Lexical form.
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

		// 2. get the type of accent is on Lexical form.
		// we are checking for other unicode symbols above, do we need to? Maybe we can create an object for the
		// character codes and factor out the ifs below
		if (accentedChar.match(/[\u0300]/g)) {
			accentType = 'grave';
		} else if (accentedChar.match(/[\u0301]/g)) {
			accentType = 'acute';
		} else if (accentedChar.match(/[\u0302]/g)) {
			accentType = 'circumflex';
		}

		// 3. get the syllable corresponding to the accented character (lexical form)
		// Break the Lexical form into syllables
		var lexicalSyllableArray = Syllabify.getUnits(removeAccent(lexicalForm));
		console.log('lexicalSyllableArray: ', lexicalSyllableArray);

		// step through the characters of the returned lexical form syllable array and get the syllable that had the accent
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

		console.log('lexical form syllable with accent is: ', syllableWithAccent);

		// 4. using the above info, follow the accent rules corresponding to the accent type

		// break the composedWord into syllables
		var composedSyllableArray = Syllabify.getUnits(composedWord);
		console.log('composedSyllableArray: ', composedSyllableArray);

		// for verbs, the accent will want to move to the syllable closest to the front of the word

		// if the accent is grave, put it on the last syllable of the composed word

		// if accent is acute, it can go on any of the last three syllables
		// start at the antipenult (farthest forward) syllable,
		// if ultima is long, antipenult can't have the syllable, go to penult instead

		// if accent is circumflex, it can only go on the last two syllables
		// start at the penult (2nd to last) syllable
		// if the ultima is long and the penult gets the accent, change the accent to an acute

 	 // 	3. a Circumflex may stand only on the last two syllables
 	 //		a) circumflex may only stand on a long syllable
 	 //		b) circumflex can only be on the penult syllable if penult is long and ultima is short



 	 //	5. the antepenult syllable can have the accent only if the ultima syllable is short










		// 5. return the accented composedWord





		//accentedWord = 'λύω';
		return accentedWord;

	}

	return {
		removeAccent: removeAccent,
		addAccent: addAccent
	};

})();

module.exports = Accent;
