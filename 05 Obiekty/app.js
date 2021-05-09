const construct = new Object();
const basic = {};

const legs = 4;
const cat = {
  name: 'Salem',
  color: '#000',
  legs,
};

const key1 = 'name';
const key2 = 'color';

console.log(cat.name, cat.color);
console.log(cat['name'], cat['color']);
console.log(cat[key1], cat[key2]);

const {name, color} = cat;
console.log(name, color);

const dog = {
  name: 'Szarik',
  parent: {
    name: 'Reksio',
  },
};

const {dog: dogName, parent: { name: parentName }} = dog;

console.log(dogName, parentName);

// destrukturyzacja tabeli

const arr = ['Ala', 'ma', 'kota'];
const [ala, ma, kota] = arr;
console.log(ala, ma, kota);

// Jako tablica asocjacyjna

const users = {
  1: {name: 'John', id: 1},
  2: {name: 'Jane', id: 2},
  3: {name: 'Anne', id: 3},
  4: {name: 'Mike', id: 4},
  5: {name: 'Thor', id: 5},
};

console.log(users);
console.log(users[1]);
console.log(users['1']);
const userId = '2';

console.log(users[userId]);

// Funkcje jako właściwości
const catGenerator = (name, color) => {
  return {
    name: name,
    color: color,
    arrFunc: () => {
      console.log('arrFunc', this);
    },
    nFunc: function () {
      console.log('nFunc', this);
    },
    oFunc() {
      console.log('oFunc', this);
    }
  };
};

const kot = catGenerator('Rademenez', '#fff');

kot.arrFunc();
kot.nFunc()
kot.oFunc()

console.log(kot);

// referencja

const catCopy = kot;

catCopy.name = 'Filemon';

console.log('catCopy', catCopy);
console.log('kot', kot);

// klonoanie

const catClone = {...kot};
catClone.name = 'Bonifacy';

console.log('catClone', catClone);
console.log('kot', kot);

// klonowanie głębokie

const deepClone = JSON.parse(JSON.stringify(kot));
console.log('deepClone', deepClone);

// Klasy
// =====

class User {
  legs = 2;
  #age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  nameWithTitle() {
    return `${this.#title()} ${this.firstName} ${this.lastName}`;
  }

  #title() {
    return this.firstName[this.firstName.length - 1] === 'a' ? 'Pani' : 'Pan';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set birthYear(year) {
    this.#age = (new Date()).getFullYear() - year;
  }

  get birthYear() {
    return (new Date()).getFullYear() - this.#age;
  }

  static create(firstName, lastName, age) {
    return new User('Jan', 'Kowalski', 18);
  }
}

const jan = new User('Jan', 'Kowalski', 18);
const jacek = User.create('Jacek', 'Nowak', 20);

console.log('jan.fullName', jan.fullName);
console.log('jan.name', jan.name);
console.log('jan.legs', jan.legs);
console.log('jan.nameWithTitle', jan.nameWithTitle());
console.log('jan.birthYear', jan.birthYear);
console.log('jan.age', jan.age);
jan.birthYear = 2000;
jan.middleName = 'Mateusz'; // !!
console.log('jan.middleName', jan.middleName);
console.log('jan.age', jan.birthYear);

// Dziedziczenie

class A {
  _aa;
  constructor(a) {
    this.a = a;
    this._aa = a + a;
  }

  foo() {
    return this._aa;
  }
}

class B extends A {
  constructor(b) {
    super(b);
    this.bb = b * b;
  }

  get b() {
    return this._aa;
  }

  foo() {
    return super.foo() + this.bb;
  }
}

const b = new B(2);

console.log(b.a);
console.log(b.b);
console.log(b._aa);
console.log(b.bb);
console.log(b.foo());
console.log(b instanceof A);
console.log(b instanceof B);

// abstrakcja

class PersonAbstract {
  constructor() {
    console.log('this.constructor', this.constructor, this.__proto__);
    if (this.constructor === PersonAbstract) {
      throw new Error("Nie możesz tworzyć obiektów z klasy abstrakcyjnej!");
    }
  }
}

class Director extends PersonAbstract {
  toString() {
    return 'Dyrrrektor';
  }
}

const dir = new Director();
console.log('' + dir);
console.log(dir.toString());
console.log(dir);

const per = new PersonAbstract();

// Zadanie domowe do 11.04.2021
// Zbudować obiektowy model kalkulatora. Poza obsługą standardowych przycisków 0-9, +-/*= nie należy zapomnieć o przecinku, MR (odczytanie z pamięci), MS (zapis do pamięci), MC (wyczyszczenie pamięci), C (wyczyszczenie całego stanu), CE (wyczyszczenie ostatniej liczby)
// Dla ambitnych stworzenie metody `history()` która zwróci tablice obiektów postaci {a: number, b: number, sign: string, result: number} wraz z metoda to string `${a} ${sign} ${b} = ${result}`
