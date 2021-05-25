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

const result = getLithuaniaPlaces(tourism, Template);

document.getElementById('app')?.append(result.toString());
