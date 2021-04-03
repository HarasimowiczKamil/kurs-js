// typy

console.log(typeof '');
console.log(typeof true);
console.log(typeof 12, Number.isInteger(12), Number.isFinite(12));
console.log(typeof 12.6, Number.isInteger(12.6), Number.isFinite(12.6));
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);
console.log(typeof []);

// Boolowskie
console.log('true/false', true, false);
console.log('not', !true, !false);

console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);

console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);

// confirm('dać console.warm?') && console.warn('warn 1');
// confirm('Nie dać console.warm?') || console.warn('warn 2');

console.log(
  Boolean('cokolwiek'),
  Boolean('0'),
  !!'0'
);
console.log(
  Boolean(''),
  Boolean(),
  !!''
);

// Number

console.log(1);
console.log(0b10);
console.log(0o10);
console.log(0x10);
console.log(NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);


console.log(1 + 2);
console.log(2 - 1);
console.log(2 * 2);
console.log(8 / 2);
console.log(8 % 3);
console.log('pow', Math.pow(2, 3));
console.log('**', 2 ** 3);
console.log(Math.abs(2 - 3));
console.log(Math.sqrt(36));
console.log(Math.floor(Math.random() * 10));

// inkrementacja/dekrementacja

let i1 = 0;
console.log('i1', ++i1);
console.log('i1', ++i1);
console.log('i1', ++i1);

let i2 = 0;
console.log('i2', i2++);
console.log('i2', i2++);
console.log('i2', i2++);

let i3 = 10;
console.log('i3', i3--);
console.log('i3', --i3);
console.log('i3', i3--);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log('1 > 2', 1 > 2);
console.log('1 >= 2', 1 >= 2);
console.log('1 == 1', 2 - 1 == 1);
console.log('1 === 1', 2 - 1 === 1);
console.log('1 <= 2', 1 <= 2);
console.log('1 < 2', 1 < 2);

console.log('isInt', Number.isInteger(3 + 5));

// float
console.log(0.1 + 0.2);
console.log(.1 + .2);
console.log((.1 + .2).toFixed(16));

console.log((.1 + .2) == 0.3);
console.log((.1 + .2) === 0.3);
console.log((.1 + .2) === (.1 + .2));
console.log((.1 + .2).toFixed(16) === 0.3);

console.log(1.0, Math.floor(1.0), Math.round(1.0), Math.ceil(1.0));
console.log(1.1, Math.floor(1.1), Math.round(1.1), Math.ceil(1.1));
console.log(1.5, Math.floor(1.5), Math.round(1.5), Math.ceil(1.5));
console.log(1.9, Math.floor(1.9), Math.round(1.9), Math.ceil(1.9));

function strip(number) {
  return (parseFloat(number.toPrecision(12)));
}

console.log(strip(0.1 + 0.2));

// string / zmienne

console.log("Co tu\n\
kolejna linia\
  się wydarzy");

console.log("Co tu\n" +
  "kolejna linia" +
  "się wydarzy");

console.log(`Co tu\n
kolejna linia
  się wydarzy`);



console.log('foo', foo);

{
  var foo = 'W Szczebrzeszynie chrząszcz brzmi w trzcinie';
  const bar = 'W Szczebrzeszynie chrząszcz brzmi w trzcinie';
  let baz = 'W Szczebrzeszynie chrząszcz brzmi w trzcinie';

  console.log('foo', foo);
  console.log('bar', bar);
  console.log('baz', baz);

  foo = 'Nie ma, że się nie da';
  baz = 'Nie ma, że się nie da';

  console.log('foo', foo, foo.length);
  console.log('baz', baz, baz.length);

  console.log(foo[0], foo[1], foo.charAt(2), foo.charAt(3));
  console.log(foo[foo.length - 1]);
  console.log(...foo)
  console.log(foo.split(' ').join('_'));

  console.log(window);
}

console.log('to jest jakiś tekst'.toUpperCase());
console.log('TO TEŻ JEST TEKST'.toLowerCase());

console.log('Co tu można jeszcze napisać'.indexOf('tu'));
console.log('Co tu można jeszcze napisać'.lastIndexOf('a'));
console.log('Ala ma kota'.includes('Ela'));
console.log('Ala ma kota'.startsWith('Ala'));
console.log('Ala ma kota'.endsWith('kota'));

console.log('Ala ma kota'.substr(4, 2));
console.log('Ala ma kota'.substring(4, 6));

const txt = 'Ala ma kota i ma psa';
console.log(txt.replace('Ala', 'Ela'));
console.log(txt.replace('ma', 'nie ma'));
console.log(txt.replace(/ma/g, 'nie ma'));

console.log('-'.repeat(20));


console.log('foo', foo);

const aaa = 123;
const bbb = 'World';

console.log('Hello ' + bbb);
console.log(`Hello ${bbb}`);
console.log(`Hello ${bbb} ${bbb + 2}`);

// string cd...

console.log('bool ' + true);
console.log('number ' + 1.23);
console.log('undefined ' + undefined);
console.log('1' + 2);
console.log(1 + '2');
console.log(1 - '2');
console.log(2 * '2');
console.log(2 * '0x12');
console.log(2 * 'Ala');
console.log('Ala' - 1);

// Date

const past = new Date('2019-01-02 13:33:21');
const now = new Date();
console.dir(now);
console.log(now);
const day = now.getDay();

let weekDay = 'nie wiem';
if (day === 0) {
  weekDay = 'niedziela';
} else if (day === 1) {
  weekDay = 'poniedziałek';
} else if (day === 2) {
  weekDay = 'wtorek';
} else if (day === 3) {
  weekDay = 'środa';
} else if (day === 4) {
  weekDay = 'czwartek';
} else if (day === 5) {
  weekDay = 'piątek';
} else {
  weekDay = 'sobota';
}

console.log(`Dziś jest ${weekDay} ${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);

console.log('timestamp', (new Date()).getTime()/1000);
console.log('timestamp', new Date(0));

const startAt = (new Date()).getTime();

alert('Kliknij OK');

alert(`Zajęło ci to ${((new Date()).getTime() - startAt) / 1000} sekund`)


// Bonus

console.log(
`    \\ /      Powodzenia
    oVo
\\___XXX___/
 __XXXXX__
/__XXXXX__\\
/   XXX   \\
     V
 `
);

console.log('🐷', '🐷'.length);
console.log('ł', 'ł'.length);

console.log("\u00BC"); //¼
console.log("\u{BC}"); //¼
console.log("\xBCb"); //¼

console.log("\u00A9"); //©
console.log("\u{A9}"); //©
console.log("\xA9"); //©

console.log("\u{1F691}"); //🚑
console.log("\u{1F4A9}"); //💩
console.log('👩‍❤️‍👩', '👩‍❤️‍👩'.length);

// ćwiczenia
// Napisz kod który zapyta cię o liczbę i procent. W wyniku poda jaka liczba stanowi procent tej liczby.

// Zadanie domowe
// Wariacje na temat liczby
// Napisz program który zapyta o liczbę a w odpowiedzi poda kilka (np 5) ciekawostek na jej temat. Np.
// Jedna niech będzie warunkowa. Postaraj się obsłużyć przypadki skraje np gdy ktoś liczby nie poda.
// Dla liczby 5:
//   Jeżeli promień pizzy będzie miał 5 cm to jej powierzchnia będzie liczyć 49.29 cm^2
//   Jeżeli drabina będzie miał 5 m to aby dosięgnąć księżyca będzie trzeba ich potrzeba 76880000 aby go dosięgnąć
//
