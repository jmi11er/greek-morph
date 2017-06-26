(function(global) {
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

	var Composer = function(word, tense, voice, mood, person) {
		return new Composer.init(word, tense, voice, mood, person);
	}

	Composer.prototype = {

		// planning to use the tensify library for English definitions (https://www.npmjs.com/package/tensify)

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
			// get the word without the accent marks
			var normWord = this.removeAccents(this.word);
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
			var word = stem + connector + personalEnding;

			// return flow(
			// 	lengthenVowels,
			// 	addAccents
			// )(word);

			// call lengthenVowels and addAccents first
			return word;
		},

		removeAccents: function() {
			// remove the accent marks
			return this.word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
		},

		addAccents: function() {
			var accentedWord = '';

			// add accent marks here
			accentedWord = this.word;

			return accentedWord;
		},

		lengthenVowels: function() {
			var wordWithLongVowel = '';

			// lengthen vowel here
			wordWithLongVowel = this.word;

			return wordWithLongVowel;
		}

	};

	Composer.init = function(word, tense, voice, mood, person) {

		// TODO: return error if no value for any of the above

		var self = this;
		self.word = word || '';
		self.tense = tense || '';
		self.voice = voice || '';
		self.mood = mood || '';
		self.person = person || '';

	}

	Composer.init.prototype = Composer.prototype;

	global.Composer = Composer;

}(global));
