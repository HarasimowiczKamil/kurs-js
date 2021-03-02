// alert('Hello World');

console.log('Hello World');

console.log(
  'One',
  'Two',
  'Three',
  this
);
console.warn('Uwaga to ja');
console.error('Co tu sie...');

console.log(document.getElementsByTagName('h1')[0])
console.dir(document.getElementsByTagName('h1')[0]);

console.group('Grupa 1');
console.log('Widać');
console.log('to też');
console.log('i to\na to w nowej linii');
console.groupEnd();

console.groupCollapsed('Grupa 2');
console.log('Nie widać');
console.log('tego też');
console.log('i tego');
console.groupEnd();

// console.time('test1');
// console.log('Hello World');
// alert('Hallo ' + prompt('Jak masz na imię?'));
// console.log(confirm('Było ok?'));
// console.timeEnd('test1');


document.write('Jakiś tekst');
document.write('Hello World');
document.writeln('A to cała linia<br>');
document.writeln('A to cała linia<br>');

document.body.appendChild(document.createElement('b'));
document.body.innerHTML = '<b>Hello World</b>';

// komentarze
// console.log('To tylko komentarz');
/*
to też tylko komenatrz

i to

długi
*/

// Klawiszologia
// Ctrl + / - komentarz
// F5 - uruchomienie
// Ctrl + Space - podpowiedzi
// Ctrl + Shift + Space - opis parametrów
// Ctrl + Shift + F - wyszukiwanie w projekcie
// Ctrl + Shift + Alt + strałki - zaznaczanie pionowe
// Ctrl + F - szukaj
// Ctrl + H - zamień



// Zad domowe.
// Znajdz 10 skrutów w Visual Studio i wypisz je w konsoli wraz z opisem
// Napisz kod który zapyta cię o imię i przywita się z tobą