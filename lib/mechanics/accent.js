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


		// add accent marks here
		//accentedWord = word;
		accentedWord = 'λύω';

		return accentedWord;
	}

	return {
		removeAccent: removeAccent,
		addAccent: addAccent
	};

})();

module.exports = Accent;
