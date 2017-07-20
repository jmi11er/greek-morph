/**
 * greek-morph
 * Copyright(c) 2017 Jason Miller <jason@kenosiscoders.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

(function(global) {

	/**
	 * Module dependencies.
	 */
	var Accent = require('./mechanics/accent');

	/**
	 * Returns a new `Composer` object.
	 */
	var Composer = function(lexicalForm, tense, voice, mood, person) {
		return new Composer.init(lexicalForm, tense, voice, mood, person);
	}

	// note: this is called 'object literal notation'
	Composer.prototype = {

		// note: planning to use the tensify library for English definitions (https://www.npmjs.com/package/tensify)

		getConnectingVowel: function(ending) {
			var connectingVowel = '';
			if(this.mood === 'indicative') {
				if (!ending || ending.charAt(0) === 'μ' || ending.charAt(0) === 'ν') {
					connectingVowel = 'ο';
				} else {
					connectingVowel = 'ε';
				}
			}
			return connectingVowel;
		},

		getVerbalStem: function() {
			var stem = '';
			// get the lexicalForm without the accent marks
			var normWord = Accent.removeAccent(this.lexicalForm);
			// get the root
			var root = normWord.substr(0, normWord.length - 1);

			if (root.endsWith('υ')) {
				stem = root;
			}
			return stem;
		},

		getPersonalEnding: function() {
			var ending = '';
			if (this.tense === 'present' && this.voice === 'active' && this.mood === 'indicative') {
				switch (this.person) {
					case '1s':
						ending = '';
						break;
					case '2s':
						ending = 'ς';
						break;
					case '3s':
						ending = 'ι';
						break;
					case '1p':
						ending = 'μεν';
						break;
					case '2p':
						ending = 'τε';
						break;
					case '3p':
						ending = 'νσι';
						break;
					default:
						ending = '';
				}
			}
			return ending;
		},

		constructWord: function() {
			var stem = this.getVerbalStem();
			var personalEnding = this.getPersonalEnding();
			var connector = this.getConnectingVowel();
			var composedWord = stem + connector + personalEnding;

			// lengthen the vowels  - why?

			// add the accent
			// var accentedWord = Accent.addAccent(composedWord, this.lexicalForm);

			// add breathing marks

			// return the constructed word
			return composedWord;
		},

		// what was the purpose of this again?
		lengthenVowels: function() {
			var wordWithLongVowel = '';

			// lengthen vowel here
			wordWithLongVowel = this.lexicalForm;

			return wordWithLongVowel;
		}

	};

	Composer.init = function(lexicalForm, tense, voice, mood, person) {

		// throw error if not all arguments passed
		for (var index = 0; index < arguments.length; index++) {
			if (arguments[index] === undefined) {
				throw "Argument missing!";
			}
		}

		var self = this;
		self.lexicalForm = lexicalForm;
		self.tense = tense;
		self.voice = voice;
		self.mood = mood;
		self.person = person;

	}

	Composer.init.prototype = Composer.prototype;

	global.Composer = Composer;

}(global));
