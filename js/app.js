"use strict";
/* function addNumbers(a: number, b: number): number {
  return a + b;
}
var sum = addNumbers(10, 15);

document.getElementById('app')?.append('Sum of the two numbers is : ' + sum);
console.log('Sum of the two numbers is: ' + sum);
*/
var _a, _b;
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
var result = getLithuaniaPlaces(tourism, Template);
var noNumbers = arrayWithoutNumbers(tourism);
(_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.append(result.toString());
(_b = document.getElementById('beSkaiciu')) === null || _b === void 0 ? void 0 : _b.append(noNumbers.toString());
