// setTimeout

// setTimeout(() => console.log('Hallo'), 1000);
// const timer = setTimeout(() => console.log('Hallo'), 3000);
// console.log(timer);
// clearTimeout(timer);
//
// console.log('Start for');
// for (var i = 0; i < 10; ++i) {
//   setTimeout(() => console.log('ok', i), 1000);
// }

// setInterval

// const cykTimer = setInterval(() => console.log('cyk'), 1000);
// setTimeout(() => clearInterval(cykTimer), 10000);

// praktyczne wykorzystanie

function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

const searchInput = document.getElementById('search');
const throttledChange = throttled(1000, () => console.log('Szukaj(t)', searchInput.value));

// setInterval(throttledChange, 30);


function debounced(delay, fn) {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}

const debouncedChange = debounced(1000, () => console.log('Szukaj(d)', searchInput.value));
searchInput.addEventListener('keypress', debouncedChange);

// Promise
// Promise.resolve()
// Promise.reject()

const timeout = (delay) => {
  return new Promise((resolve, reject) => {
    if (typeof delay !== 'number') {
      reject('Delay is not a number');
    }
    setTimeout(() => resolve(delay), delay);
  })
};

timeout(500)
  .then((delay) => {
    console.log('Minęło', delay, 'ms');
    return timeout(500);
  })
  .then((delay) => console.log('Minęło', delay, 'ms'))
  .catch((error) => console.error(error));

console.time('promise-all')
Promise.all([
  timeout(100),
  timeout(300),
  timeout(200),
  timeout(400),
  timeout(500),
]).then((results) => {
  console.timeEnd('promise-all');
  console.log('arg', results);
});

// async await

async function aTimeout(delay) {
  return timeout(delay);
}

async function waitFor() {
  console.log('start');
  console.time('await-1');
  const w1 = await timeout(1000);
  console.timeEnd('await-1');
  console.time('await-2');
  const w2 = await timeout(2000);
  console.timeEnd('await-2');
  console.time('await-3');
  const w3 = await timeout(1500);
  console.timeEnd('await-3');

  console.log('hello', w1, w2, w3);
}

(async () => {
  console.time('await-all');
  await waitFor();
  console.timeEnd('await-all');
})();

// Zadanie stoper

// Zrobić stoper w JavaScript 2 przyciski [Start] i [Stop]
// Dla ambitnych dodatkowo timer (odliczanie czasu wstecz) możliwość jego ustawienia, wystartowania
