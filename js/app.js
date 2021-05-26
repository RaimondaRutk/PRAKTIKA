"use strict";
/* function addNumbers(a: number, b: number): number {
  return a + b;
}
var sum = addNumbers(10, 15);

document.getElementById('app')?.append('Sum of the two numbers is : ' + sum);
console.log('Sum of the two numbers is: ' + sum);
*/
var _a, _b, _c, _d;
var tourism = [
    '1',
    'Traku_pilis',
    'Malborko_pilis',
    'Laju_takas',
    'Kreekenavos_turizmo_centras',
    'Rundales_pilis',
    'Smetonos_dvaras',
];
function getLithuaniaPlaces(tourism, template) {
    var SetTourism = tourism.filter(function (place) { return template.indexOf(place) > -1; });
    return SetTourism;
}
var Template = [
    'Traku_pilis',
    'Laju_takas',
    'Kreekenavos_turizmo_centras',
    'Smetonos_dvaras',
];
var arrayWithoutNumbers = function (tourism) {
    var i = 0;
    while (i < tourism.length) {
        if (!!Number(tourism[i])) {
            tourism.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return tourism;
};
var getCastles = function (tourism) {
    var castles = new Array();
    tourism.forEach(function (place, index) {
        var words = new Array();
        var newWord = '';
        var isPilis = false;
        words = place.split('_');
        words.forEach(function (word, index) {
            if (word == 'pilis') {
                words.splice(index, 1);
                isPilis = true;
            }
            else
                newWord += word;
        });
        if (isPilis) {
            castles.push(newWord);
        }
    });
    return castles;
};
var symbolCount = function (tourism) {
    var symbols = new Array();
    tourism.map(function (place, index) {
        var newWord = '';
        newWord = place + ' - ' + place.length;
        symbols.push(newWord);
    });
    return symbols;
};
var result = getLithuaniaPlaces(tourism, Template);
var noNumbers = arrayWithoutNumbers(tourism);
var castles = getCastles(tourism);
var symbols = symbolCount(tourism);
(_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.append(result.toString());
(_b = document.getElementById('beSkaiciu')) === null || _b === void 0 ? void 0 : _b.append(noNumbers.toString());
(_c = document.getElementById('pilys')) === null || _c === void 0 ? void 0 : _c.append(castles.toString());
(_d = document.getElementById('simboliai')) === null || _d === void 0 ? void 0 : _d.append(symbols.toString());
