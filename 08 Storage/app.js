//localStorage.setItem('abc', 'foo');
// 5MB

console.log('localStorage', localStorage);
console.log('sessionStorage', sessionStorage);


// cookie 4kb
// document.cookie = "user=John; domain=example.com; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT; secure"
// document.cookie = "user=John; domain=example.com; path=/; max-age=3600; secure"
// httpOnly
// samesite
console.log('document.cookie', document.cookie);

// https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
