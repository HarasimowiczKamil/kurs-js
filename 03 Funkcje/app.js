hello();

// Deklaracja funkcji
// ==================
function hello(name = 'nieznajomy') {
  console.log(`Hello ${name}`);
}

hello('Kamil');

// hi(); //błąd
// console.log(hi);

// Wyrażenie funkcyjne
// ====================
const hi = function (name = 'nieznajomy') {
  console.log(`Hi ${name}`);
}

hi('Kamil');
hi();

console.log(sayHi);

var sayHi = function (name = 'nieznajomy') {
  console.log(`Hi ${name}`);
}

// No więc return
// ==============

function pow2(l) {
  return l * l;
}

console.log(pow2(2));
console.log(pow2(3));

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));

// ==============<<<<<<<

function formatDate(date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + 1).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

console.log('Date', formatDate());
console.log('Date', formatDate(new Date('2019-08-07 02:03:04')));


// Funkcja jako klasa
// ==================

function User(name) {
  this.name = name;
  console.log('this', this);
  console.log('name', name);
  return name;
}

User.prototype.getName = function () {
  console.log('Getter', this);
  return this.name;
};

const u1 = User('User One');
const u2 = new User('User Two');
console.log('User', User('Name'));
// console.log('User.name', u1 instanceof User, u1.getName());
console.log('User', new User('Name'));
console.log('User.name', u2 instanceof User, u2.getName());


// Funkcje strzałkowe
// ==================
const witaj = (name = 'nieznajomy') => {
  console.log(`Witaj ${name}`);
}

witaj('Kamil');
witaj();

// skrócona forma
const pow = a => a * a;

console.log(pow());
console.log(pow(9));


const result = [1, 2, 3, 4, 5].map(pow);
console.log(result);

const result2 = [1, 2, 3, 4, 5].map(a => a * a);
console.log(result2);


// Funkcja z innego pliku
console.log(dayOfWeek());


// Zamykanie kontekstu

(function () {
  var aaaa = 123;
  console.log('1', aaaa, this);
})();

(function () {
  var aaaa = 123;
  console.log('2', aaaa, this);
}());

(() => {
  var aaaa = 123;
  console.log('3', aaaa, this);
})();

console.log('Aaa', window.aaaa);
console.log('Aaa', window.aaab);


// Pure function / Czyste funkcje

const showSheep = (x) => console.log('🐏'.repeat(x));

const cloneSheep = (x) => '🐏'.repeat(x);

showSheep(460);
console.log(cloneSheep(460));

// random

function randomBetween(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomBetween(1, 6));

function rollDie() {
  return randomBetween(1, 6);
}

const stats = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
for (let i = 0; i < 6000000; ++i) {
  stats[rollDie()]++;
}

console.log(stats);

// zadanie
// =======

// Napisz funkcję formatującą date do postaci YYYY-MM-DD HH:II:SS czyli np:
// 2021-03-28 17:45:00

// zadanie
// =======

// Napisz funkcję który wykonuje operacje silni
// 0! = 1
// 1! = 1
// 5! = 1 * 2 * 3 * 4 * 5

const factorial = (n) => {
  if (n < 0 || isNaN(n)) {
    return false;
  }
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}
console.log('1!', factorial(1));
console.log('2!', factorial(2));
console.log('3!', factorial(3));
console.log('4!', factorial(4));
console.log('5!', factorial(5));

// Napisz funkcję która sumuje przekazane do niej liczby
// np. suma(1, 2, 3, 4) // 10

function suma(arg, ...args) {
  if (args.length === 0) {
    return arg;
  }
  return arg + suma(...args);
}

// Zadanie domowe

// Zadanie domowe do 13.04,2021
// Postaraj się przepisać swoje poprzednie zadanie domowe tak aby wykorzystywało funkcję na poszczególne elementy
// Walidacja powinna mieć swoją funkcję, ciekawostki swoje itd. Zadbaj o czytelność kodu i dobre nazwy zmiennych/funkcji