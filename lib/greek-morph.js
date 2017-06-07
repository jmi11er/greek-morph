'use strict';

//import flow from 'lodash/fp/flow';

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

/**
	* Module dependencies.
	*/

/**
	* expose `greek-morph`.
	*/
exports = module.exports = Compose;

/**
	* greek-morph
	*
	* parameter `word`:
	*
	*   - param 1
	*   - param 2
	*
	* @param {Object} word
	* @api public
	*/
function Compose (word) {

}

// var globalVal = 'hello global';
//
// export const getConnectingVowel = (mood, ending) => {
// 	let connectingVowel = '';
//
// 	if(mood === 'indicative') {
// 		if (!ending || ending.charAt(0) === 'μ' || ending.charAt(0) === 'ν') {
// 			connectingVowel = 'ο';
// 		} else {
// 			connectingVowel = 'ε';
// 		}
// 	}
// 	return connectingVowel;
// };
//
// export const getVerbalStem = (word) => {
// 	let stem = '';
// 	// get the word without the accent marks
// 	let normWord = removeAccents(word);
// 	// get the root
// 	let root = normWord.substr(0, normWord.length - 1);
//
// 	if (root.endsWith('υ')) {
// 		stem = root;
// 	}
//
// 	return stem;
// };
//
// export const getPersonalEnding = (person, tense, voice, mood) => {
// 	let ending = '';
//
// 	if (tense === 'present' && voice === 'active' && mood === 'indicative') {
// 		switch (person) {
// 			case '1s':
// 				ending = '';
// 				break;
// 			case '2s':
// 				ending = 'ς';
// 				break;
// 			case '3s':
// 				ending = 'ι';
// 				break;
// 			case '1p':
// 				ending = 'μεν';
// 				break;
// 			case '2p':
// 				ending = 'τε';
// 				break;
// 			case '3p':
// 				ending = 'νσι';
// 				break;
// 			default:
// 				ending = '';
// 		}
// 	}
//
// 	return ending;
// };
//
// export const constructWord = (store) => {
// 	let stem = getVerbalStem(store.selectedWord);
// 	let personalEnding = getPersonalEnding(store.person, store.tense, store.voice, store.mood);
// 	let connector = getConnectingVowel(store.mood, personalEnding);
// 	let word = stem + connector + personalEnding;
//
// 	return flow(
// 		lengthenVowels,
// 		addAccents
// 	)(word);
// };
//
// const removeAccents = (word) => {
// 	// remove the accent marks
// 	return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
// }
//
// const addAccents = (word) => {
// 	let accentedWord = '';
//
// 	// add accent marks here
// 	accentedWord = word;
//
// 	return accentedWord;
// }
//
// export const lengthenVowels = (word) => {
// 	return word;
// }
