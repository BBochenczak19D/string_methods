const dlugosc = document.querySelector('.lenght');
const wynik = document.querySelector('.content .wynik');
let tekst = document.querySelector('.tekst');
console.log(tekst);
dlugosc.addEventListener('click', () => {
  const x = tekst.value;
  console.log(tekst.value);
  wynik.textContent = 'Dlugosc ' + x + ' = ' + x.length;
  console.log(x.length);
});

const charat = document.querySelector('.charat');
const e = document.querySelector('.e');
console.log(e);
charat.addEventListener('click', function() {
  let n = e.value;
  console.log(n);
  const x = tekst.value;
  wynik.textContent = 'litera o indeksie ' + n + '=' + x.charAt(n);
});

const indexof = document.querySelector('.indexof');
indexof.addEventListener('click', () => {
  let n = e.value;
  const x = tekst.value;
  wynik.textContent = x.indexof(n);
});
