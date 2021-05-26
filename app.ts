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

type tourism = Array<string>;
type TourismObj = {
  title: string;
  index: number;
};

function toObject(tourism: Tourism): Array<TourismObj> {
  var id = 0;
  return tourism.reduce((acc, item) => {
    id++;
    acc.push({ index: id, title: item });
    return acc;
  }, <Array<TourismObj>>[]);
}

const masyvas = toObject(tourism);

let htmlResult: string = '';
masyvas.forEach((item: TourismObj) => {
  htmlResult += `id: ${item.index}, title: ${item.title}<br>`;
});

//13 užduotis
const arr = toObject(tourism);

type VisitedPlaces = Array<number>;
const VisitedPlaces: VisitedPlaces = [3, 5, 7];

let htmlResVisited: string = '';
arr.forEach((item: TourismObj) => {
  if (VisitedPlaces.indexOf(item.index) > -1) {
    htmlResVisited += `id: ${item.index}, title: <s>${item.title}</s><br> `;
  } else {
    htmlResVisited += `id: ${item.index}, title: ${item.title}<br> `;
  }
});

const el = document.getElementById('masyvas');
if (el) el.innerHTML = htmlResult;

const el1 = document.getElementById('visitedPlaces');
if (el1) el1.innerHTML = htmlResVisited;

// 12 užduotis
function getJustTourism(tourism: Tourism, turizmas: Tourism): Tourism {
  const SetTour = tourism.filter((place) => {});
  return SetTour;
}
var Turizmas = ['turizmo'];

const result = getLithuaniaPlaces(tourism, Template);
const noNumbers = arrayWithoutNumbers(tourism);
const castles = getCastles(tourism);
const symbols = symbolCount(tourism);

document.getElementById('app')?.append(result.toString());
document.getElementById('beSkaiciu')?.append(noNumbers.toString());
document.getElementById('pilys')?.append(castles.toString());
document.getElementById('simboliai')?.append(symbols.toString());
document.getElementById('masyvas')?.append(masyvas.toString());
document.getElementById('turizmas')?.append(Turizmas.toString());
