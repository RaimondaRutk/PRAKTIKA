/* function addNumbers(a: number, b: number): number {
  return a + b;
}
var sum = addNumbers(10, 15);

document.getElementById('app')?.append('Sum of the two numbers is : ' + sum);
console.log('Sum of the two numbers is: ' + sum);
*/

const tourism = [
  '1',
  'Traku_pilis',
  'Malborko_pilis',
  'Laju_takas',
  'Kreekenavos_turizmo_centras',
  'Rundales_pilis',
  'Smetonos_dvaras',
];

type Tourism = Array<string>;

function getLithuaniaPlaces(tourism: Tourism, template: Tourism): Tourism {
  const SetTourism = tourism.filter((place) => template.indexOf(place) > -1);
  return SetTourism;
}

var Template = [
  'Traku_pilis',
  'Laju_takas',
  'Kreekenavos_turizmo_centras',
  'Smetonos_dvaras',
];

const arrayWithoutNumbers = (tourism: Tourism) => {
  var i = 0;
  while (i < tourism.length) {
    if (!!Number(tourism[i])) {
      tourism.splice(i, 1);
    } else {
      i++;
    }
  }
  return tourism;
};

const getCastles = (tourism: Tourism): Tourism => {
  const castles: Tourism = new Array();
  tourism.forEach((place, index) => {
    var words: Tourism = new Array();
    var newWord = '';
    var isPilis = false;
    words = place.split('_');
    words.forEach((word, index) => {
      if (word == 'pilis') {
        words.splice(index, 1);
        isPilis = true;
      } else newWord += word;
    });

    if (isPilis) {
      castles.push(newWord);
    }
  });
  return castles;
};

const symbolCount = (tourism: Tourism): Tourism => {
  const symbols: Tourism = new Array();
  tourism.map((place, index) => {
    var newWord = '';
    newWord = place + ' - ' + place.length;
    symbols.push(newWord);
  });
  return symbols;
};

const result = getLithuaniaPlaces(tourism, Template);
const noNumbers = arrayWithoutNumbers(tourism);
const castles = getCastles(tourism);
const symbols = symbolCount(tourism);

document.getElementById('app')?.append(result.toString());
document.getElementById('beSkaiciu')?.append(noNumbers.toString());
document.getElementById('pilys')?.append(castles.toString());
document.getElementById('simboliai')?.append(symbols.toString());
