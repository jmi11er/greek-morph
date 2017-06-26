// import expect from 'expect';
var expect = require('expect');
var greekMorph = require('../lib/greek-morph');

describe('getConnectingVowel', function() {
	var composerObj = Composer('λύω', 'present', 'active', 'indicative', '1s');

	it('should get the connecting vowel o for indicatives where the ending begins with mu', function() {
		var actual = composerObj.getConnectingVowel('μεν');
		// greek omicron, not english o
		var expected = 'ο';
		expect(actual).toEqual(expected);
	});

	it('should get the connecting vowel o for indicatives where the ending begins with nu', function() {
		var actual = composerObj.getConnectingVowel('νσι');
		// greek omicron, not english o
		var expected = 'ο';
		expect(actual).toEqual(expected);
	});

	it('should get the connecting vowel o for indicatives where the ending is blank', function() {
		var actual = composerObj.getConnectingVowel('');
		// greek omicron, not english o
		var expected = 'ο';
		expect(actual).toEqual(expected);
	});

	it('should get the connecting vowel e for indicatives in every other case', function() {
		var actual = composerObj.getConnectingVowel('τε');
		var expected = 'ε';
		expect(actual).toEqual(expected);
	});

});

describe('getVerbalStem', function() {
	var composerObj = Composer('λύω', 'present', 'active', 'indicative', '1s');

	it('should get the present stem of a v-1a verb where the verbal root ends in upsilon', function() {
		var actual = composerObj.getVerbalStem();
		var expected = 'λυ';
		expect(actual).toEqual(expected);
	});

});

describe('getPersonalEnding', () => {

	it('should return the personal ending for a 1s present active indicative verb', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '1s');
		var actual = composerObj.getPersonalEnding();
		var expected = '';
		expect(actual).toEqual(expected);
	});

	it('should return the personal ending for a 2s present active indicative verb', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '2s');
		var actual = composerObj.getPersonalEnding();
		var expected = 'ς';
		expect(actual).toEqual(expected);
	});

	it('should return the personal ending for a 3s present active indicative verb', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '3s');
		var actual = composerObj.getPersonalEnding();
		var expected = 'ι';
		expect(actual).toEqual(expected);
	});

	it('should return the personal ending for a 1p present active indicative verb', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '1p');
		var actual = composerObj.getPersonalEnding();
		var expected = 'μεν';
		expect(actual).toEqual(expected);
	});

	it('should return the personal ending for a 2p present active indicative verb', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '2p');
		var actual = composerObj.getPersonalEnding();
		var expected = 'τε';
		expect(actual).toEqual(expected);
	});

	it('should return the personal ending for a 3p present active indicative verb', function() {
		var composerObj = Composer('λύω', 'present', 'active', 'indicative', '3p');
		var actual = composerObj.getPersonalEnding();
		var expected = 'νσι';
		expect(actual).toEqual(expected);
	});

});

// describe ('lengthenVowels', () => {
//
// 	it('should return the lengthened vowel for a 1s present active indicative', () => {
// 		const actual = lengthenVowels('test');
// 		const expected = 'test';
// 		expect(actual).toEqual(expected);
// 	});
// });

// describe('calcInflectedWord', () => {
//
// 	it('should calculate the present active indicative 1s of the word λύω', () => {
// 		const actual = calcInflectedWord(
// 			{
// 				'selectedWord': 'λύω',
// 				'person': '1s',
// 				'tense': 'present',
// 				'voice': 'active',
// 				'mood': 'indicative'
// 			});
// 		const expected = 'λύω';
//
// 		expect(actual).toEqual(expected);
// 	});
//
// 	it('should calculate the present active indicative 2s of the word λύω', () => {
// 		const actual = calcInflectedWord(
// 			{
// 				'selectedWord': 'λύω',
// 				'person': '2s',
// 				'tense': 'present',
// 				'voice': 'active',
// 				'mood': 'indicative'
// 			});
// 		const expected = 'λύεις';
//
// 		expect(actual).toEqual(expected);
// 	});
// });

// describe('calculateDefinition', () => {
//
// 	it('should calculate the inflected form of a word', () => {
// 		const actual = calculateDefinition(
// 			{
// 				'selectedWord': 'λύω',
// 				'person': '1s',
// 				'tense': 'future',
// 				'voice': 'active',
// 				'mood': 'indicative'
// 			});
// 		const expected = 'I will destroy';
//
// 		expect(actual).toEqual(expected);
// 	});
// });
