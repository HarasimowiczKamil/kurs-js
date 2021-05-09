// Teoria
console.log(window.document);
console.log(document);
console.dir(document);
console.log(document.body);
console.dir(document.body);
console.log(document.head);

console.log(document.constructor, document instanceof HTMLDocument);
console.log(document.body.constructor, document.body instanceof HTMLBodyElement);

// Kiedy załadowany

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed', event);
});

// Pobieranie elementów

// po tagu

const h1 = document.getElementsByTagName('h1');
console.log(h1, h1[0], h1[0] instanceof HTMLHeadingElement);

// po id

const divSubtitle = document.getElementById('subtitle');
console.log(divSubtitle, divSubtitle instanceof HTMLDivElement);

// po class

const divs = document.getElementsByClassName('block')
console.log(divs, divs.length, divs instanceof HTMLCollection, divs[0] instanceof HTMLDivElement, divs[1] instanceof HTMLDivElement);

// po css selector

const titleHeader = document.querySelector('h1');
console.log(titleHeader);

const blocks = document.querySelectorAll('div.block');
console.log(blocks);

// ćwiczenie https://monsterjs.com/

// Właściwości

// inner/outer

console.log(divSubtitle.innerText);
console.log(divSubtitle.innerHTML);
console.log(divSubtitle.outerHTML);

divSubtitle.innerText = `
    <h3>Changed subtitle</h3>
    Other text
`;

console.log(divSubtitle.innerText);
console.log(divSubtitle.innerHTML);
console.log(divSubtitle.outerHTML);

divSubtitle.innerHTML = `
  <h3>Changed subtitle</h3>
`;

console.log(divSubtitle.innerText);
console.log(divSubtitle.innerHTML);
console.log(divSubtitle.outerHTML);

divSubtitle.outerHTML = `
  <h3>Changed subtitle</h3>
`;

console.log(divSubtitle.innerText);
console.log(divSubtitle.innerHTML);
console.log(divSubtitle.outerHTML);

// klasy

titleHeader.className = 'new-class';
console.dir(titleHeader);
console.log(titleHeader.className);
console.log('classList', titleHeader.classList);

titleHeader.classList.add('super-fancy-class');
titleHeader.classList.add('another-fancy-class');
console.dir(titleHeader);
console.log(titleHeader.className);
console.log(titleHeader.classList.contains('another-fancy-class'));

titleHeader.classList.remove('another-fancy-class');

console.dir(titleHeader);
console.log(titleHeader.className);
console.log(titleHeader.classList.contains('another-fancy-class'));

// dataset
const next = document.querySelector('#next');
console.log(next.dataset);
console.log(next.dataset.one);
console.log(next.dataset.two);

next.dataset.three = '3';

console.log(document.querySelector('div[data-three="3"]'))

// inne atrybuty

const link = document.querySelector('a');
link.href = 'https://google.com';
link.setAttribute('href', 'https://google.com');
console.log('link.href', link.getAttribute('href'), link.href);
