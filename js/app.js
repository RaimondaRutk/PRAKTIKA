"use strict";
/* function addNumbers(a: number, b: number): number {
  return a + b;
}
var sum = addNumbers(10, 15);

document.getElementById('app')?.append('Sum of the two numbers is : ' + sum);
console.log('Sum of the two numbers is: ' + sum);
*/
var _a, _b, _c, _d, _e, _f;
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
function toObject(tourism) {
    var id = 0;
    return tourism.reduce(function (acc, item) {
        id++;
        acc.push({ index: id, title: item });
        return acc;
    }, []);
}
var masyvas = toObject(tourism);
var htmlResult = '';
masyvas.forEach(function (item) {
    htmlResult += "id: " + item.index + ", title: " + item.title + "<br>";
});
//13 užduotis
var arr = toObject(tourism);
var VisitedPlaces = [3, 5, 7];
var htmlResVisited = '';
arr.forEach(function (item) {
    if (VisitedPlaces.indexOf(item.index) > -1) {
        htmlResVisited += "id: " + item.index + ", title: <s>" + item.title + "</s><br> ";
    }
    else {
        htmlResVisited += "id: " + item.index + ", title: " + item.title + "<br> ";
    }
});
var el = document.getElementById('masyvas');
if (el)
    el.innerHTML = htmlResult;
var el1 = document.getElementById('visitedPlaces');
if (el1)
    el1.innerHTML = htmlResVisited;
// 12 užduotis
function getJustTourism(tourism, turizmas) {
    var SetTour = tourism.filter(function (place) { });
    return SetTour;
}
var Turizmas = ['turizmo'];
var result = getLithuaniaPlaces(tourism, Template);
var noNumbers = arrayWithoutNumbers(tourism);
var castles = getCastles(tourism);
var symbols = symbolCount(tourism);
(_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.append(result.toString());
(_b = document.getElementById('beSkaiciu')) === null || _b === void 0 ? void 0 : _b.append(noNumbers.toString());
(_c = document.getElementById('pilys')) === null || _c === void 0 ? void 0 : _c.append(castles.toString());
(_d = document.getElementById('simboliai')) === null || _d === void 0 ? void 0 : _d.append(symbols.toString());
(_e = document.getElementById('masyvas')) === null || _e === void 0 ? void 0 : _e.append(masyvas.toString());
(_f = document.getElementById('turizmas')) === null || _f === void 0 ? void 0 : _f.append(Turizmas.toString());
