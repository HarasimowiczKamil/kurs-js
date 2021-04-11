'use strict';
// Tablice

// Tworzenie

const tab1 = []; // pusta
const tab12 = new Array();
const tab13 = new Array(5);
const tab14 = new Array(5, 6, 7);
const tab15 = new Array(5, 'Ala', 'ma', 'kota');
const tab2 = [1, 2, 3, 4]; // 4 liczby
const tab3 = ['kot', 'pies', 'chomik']; // 4 ciągi znaków

console.table(tab3);
console.dir(tab3);

console.log(typeof tab1, typeof tab12);
console.log(Array.isArray(tab1), Array.isArray(tab12));
console.log(tab1 instanceof Array);
console.log(tab13, tab14, tab15);
console.log(tab13.length, tab14.length, tab15.length);

console.log(tab2[0], tab2[1], tab2[5]);
console.log(tab3[0], tab3[1]);

console.log('[]', tab1.length);
console.log('[1, 2, 3, 4]', tab2.length);
console.log('[\'kot\', \'pies\', \'chomik\']', tab3.length);

// kiedy brak referencji

let a = 3;

const tab4 = [1, 2, a];

console.log('[1, 2, a]', tab4);

a = 4;

console.log('[1, 2, a]', tab4);

// kiedy referencja

const tab5 = [1, 2, tab4];

console.log('[1, 2, tab4]', ...tab5);

tab4[1] = 10;

console.log('[1, 2, tab4]', ...tab5);

// edycja tablicy

tab5[0] = 3;
tab5[tab5.length] = 'abc';
tab5.push('def');

tab5[9] = 'ghi';

console.log(tab5);

// ostatni element
console.log(tab5[tab5.length - 1]);

console.log(tab5.pop()); // fifo
console.log(tab5.shift()); // lifo
console.log(tab5);
console.log(tab5.pop());

// nowy element na początku
console.log(tab5);
tab5.unshift(33);
console.log(tab5);

// tekst -> tablica
const txt = 'ala ma kota';
const tab6 = [...txt];
console.log(tab6);

// text -> tablica po znaku
const tekst = 'ala ma kota';
const tab7 = tekst.split(' ');
console.log(tab7);

// tablica -> string
console.log(tab7.join(' '));

// odwracanie tablict
console.log(tab2)
console.log(tab2.reverse());
console.log(tab2);

// Wyszukiwanie w tablicy

const names = ['Fred', 'Albert', 'Ignacy', 'Eustachy', 'Edmund', 'Hektor', 'Łukasz', 'Zenon', 'Lolek'];

if (names.indexOf('Edmund') >= 0 || names.indexOf('Edmund') !== -1) {
  console.log('Edmund jest na liście');
}

if (names.includes('Edmund')) {
  console.log('Edmund jest na liście');
}

if (!names.includes('Marek')) {
  console.log('Marek nie jest na liście');
}

names.sort();
console.log(names);

// Filtrowanie
console.log(
  'Imie z "e"',
  names.find((name) => {
    return name.toLowerCase().includes('ł');
  })
);

// Filtrowanie
console.log(
  'Imona z "ł"',
  names.filter((name) => {
    return name.toLowerCase().includes('e');
  })
);


// Mapowanie danych

console.log(names.map(name => name.length));

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.map(a => a * a));

// Redukcja danych

const sum = (total, amount) => total + amount;
console.log(
  'suma',
  numbers,
  numbers.reduce(sum)
);

const avg = (total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  }
  return total;
};

console.log(
  'średnia',
  numbers,
  numbers.reduce(avg)
);

const users = [
  {name: 'John', height: 175},
  {name: 'Jane', height: 155},
  {name: 'Anne', height: 168},
];

console.log(
  users.reduce((result, user) => {
    return result.height < user.height ? user : result;
  })
);
console.log(
  users.reduce((result, user) => {
    result.push(user.height);
    return result;
  }, [])
);

// Iteracja
// forEach
names.forEach(
  (name, i) => {
    console.log('forEach', i + 1, name);
  }
);

// for
for (let i = 0; i < names.length; ++i) {
  if (i%2) {
    continue;
  }
  if (i > 5) {
    break;
  }
  console.log('for', i + 1, names[i]);
}

// while
let i = 0;
while (names[i]) {
  if (i%2) {
    ++i;
    continue;
  }
  if (i > 5) {
    break;
  }
  console.log('while',i + 1, names[i]);
  ++i;
}

// do while
let k = 0;
do {
  if (k%2) {
    ++k;
    continue;
  }
  if (k > 5) {
    break;
  }
  console.log('do while', k + 1, names[k]);
  k++;
} while (k < names.length);

// Zadanie domowe
// Posortuj tablice zgodnie z polskim alfabetem

// Zadanie domowe 2
// Zrób wyszukiwarkę miast i zabezpiecz skrypt

