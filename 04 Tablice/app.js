'use strict';
// Tablice

// Tworzenie

const tab1 = []; // pusta
const tab2 = [1, 2, 3, 4]; // 4 liczby
const tab3 = ['kot', 'pies', 'chomik']; // 4 ciągi znaków

console.log(tab2[0], tab2[1], tab2[5]);
console.log(tab3[0], tab3[1]);

console.log(tab1.length, tab2.length, tab3.length);

let a = 3;

const tab4 = [1, 2, a];

console.log(tab4);

a = 4;

console.log(tab4);

const tab5 = [1, 2, tab4];

console.log(tab5);

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

