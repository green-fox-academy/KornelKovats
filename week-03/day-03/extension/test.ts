'use strict';

let test = require('tape');
import {add, maxOfThree, median, isVowel, translate} from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
    t.equal(add(3, 3), 6);
    t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
    t.equal(add(9, 4), 13);
    t.end();
});

test('max of three: first', function (t: any): any {
    t.equal(maxOfThree(5, 7, 11), 11);
    t.end();
});

test('max of three: third', function (t: any): any {
    t.equal(maxOfThree(11, 4, 5), 11);
    t.end();
});

test('median: four', function (t: any): any {
    t.equal(median([7, 6]), 6.5);
    t.end();
});

test('median: five', function (t: any): any {
    t.equal(median([1, 2, 3, 4, 5, 8, 6, 5, 9]), 5);
    t.end();
});

test('is vowel: a', function (t: any): any {
    t.ok(isVowel('a'));
    t.end();
});

test('is vowel: u', function (t: any): any {
    t.ok(isVowel('u'));
    t.end();
});

test('is vowel: k', function (t: any): any {
    t.notOk(isVowel('k'));
    t.end();
});

test('translate: bemutatkozik', function (t: any): any {
    t.equal(translate('bemutatkoziko'), 'bevemuvutavatkovozivik');
    t.end();
});

test('translate: lagopus', function (t: any): any {
    t.equal(translate('lagopus'), 'lavagovopuvus');
    t.end();
});