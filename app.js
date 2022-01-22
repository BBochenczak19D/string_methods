//inputy
let tekst = document.querySelector('.tekst'); //1 input do wpisania stringu
const e = document.querySelector('.e'); //drugi input
//-----------------------------------------------------------
const opis = document.querySelector('.opis'); //div z opisem
const wynik = document.querySelector('.wynik'); //div z wynikiem
//zmienne - przyciski
const dlugosc = document.querySelector('.lenght');
const charat = document.querySelector('.charat');
const indexof = document.querySelector('.indexof');
const lastindexof = document.querySelector('.lastindexof');
const charchodat = document.querySelector('.charchodat');
const toupper = document.querySelector('.toupper');
const tolower = document.querySelector('.tolower');
const slice = document.querySelector('.slice');
const substr = document.querySelector('.substr');
const substring = document.querySelector('.substring');
const replace = document.querySelector('.replace');
//-----------------
const opisy = [
  "funkcja .lenght zwraca ilość elementow w tablicy", //lenght
  "Zwraca określony znak z łańcucha znaków.str.charAt(index) Liczba całkowita z przedziału od 0 do liczby o 1 mniejszej od długości łańcucha. ", //charAT
  "Zwraca pierwszy (najmniejszy) indeks elementu w tablicy równego podanej wartości lub -1, gdy nie znaleziono takiego elementu.", //infexOf
  "Zwraca ostatni indeks, pod którym podany element może być znaleziony w tablicy, lub -1 jeśli nie jest obecny. Tablica jest przeszukiwana od końca, zaczynając od indeksu fromIndex",  //lastiInfexOf
  "Zwraca liczbę oznaczającą wartość Unicode znaku o podanym indeksie. str.charCodeAt(index) index - Liczba całkowita z przedziału od 0 do liczby o 1 mniejszej od długości łańcucha.",
  "Zwraca wartość wywołującego łańcucha znaków, skonwertowaną na duże litery. str.toUpperCase()",
  "Zwraca wartość wywołującego łańcucha znaków, skonwertowaną na małe litery. str.toLowerCase()",
  "Zwraca określoną liczbę początkowych znaków w łańcuchu znaków w określonej lokalizacji. str.substr(start[, length]) ",
  "Zwraca podciąg obiektu String. str.substring(indexA[, indexB])  indexA - Liczba całkowita pomiędzy 0, a liczbą o jeden mniejszą niż długość łańcucha znaków. indexB -Opcjonalny. Liczba całkowita pomiędzy 0 i długością łańcucha znaków. ",
  "Wydobywa fragment tablicy i zwraca go jako nową tablicę. arr.slice([begin[, end]])",
  "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. ",
]
//zdarzenia dodane do przyciskow
dlugosc.addEventListener('click', () => {
  const x = tekst.value;
  console.log(tekst.value);
  wynik.textContent = 'Dlugosc ' + x + ' = ' + x.length;
  opis.textContent = opisy[0];
  console.log(x.length);
});

charat.addEventListener('click', function() {
  let n = e.value;
  console.log(n);
  const x = tekst.value;
  opis.textContent = opisy[1];
  wynik.textContent = 'litera o indeksie ' + n + '=' + x.charAt(n);
});


indexof.addEventListener('click', () => {
  let n = e.value; //wartosc drugiego inputa
  const x = tekst.value;
  if(x.indexOf(n)<0)
    wynik.textContent = 'brak elementu! '
  else
  {
    opis.textContent = opisy[2];
    wynik.textContent = 'element ' + n + "znajduje sie na indeksie: "+x.indexOf(n);
  }
  
});

lastindexof.addEventListener('click',()=>{
  let n = e.value; //wartosc drugiego inputa
  const x = tekst.value;
  if(x.lastIndexOf(n)<0)
    wynik.textContent = 'brak elementu! '
  else
  {
    opis.textContent = opisy[3];
    wynik.textContent = 'element ' + n + "znajduje sie na indeksie: "+x.lastIndexOf(n);
  }
})

charchodat.addEventListener('click',()=>{
  let n = e.value; //wartosc drugiego inputa
  const x = tekst.value;
  
  if(n<0 || n>=x.length)
    wynik.textContent = 'zle dane '
  else
  {
    opis.textContent = opisy[4];
    wynik.textContent = 'element o indexie ' + n + " ma wartosc: "+ x.charCodeAt(n)
  }
  
})

toupper.addEventListener('click',()=>{
  const x = tekst.value;
  opis.textContent = opisy[5];
  wynik.textContent = x.toUpperCase();
})
tolower.addEventListener('click',()=>{
  const x = tekst.value;
  opis.textContent = opisy[6];
  wynik.textContent = x.toLowerCase()
})





substr.addEventListener('click',()=>{
  const x = tekst.value;
  let n = e.value;
  const tab = [] //parametr 1 i 2
  zamien_na_liczbe(x,n,tab)
  opis.textContent = opisy[7];
  wynik.textContent = "string zaczynający sie od indeksu: "+ tab[0]+": liter: "+tab[1]+" : "+x.substr(tab[0],tab[1])
  
  //console.log(tab)
})

substring.addEventListener('click',()=>{
  const x = tekst.value;
  let n = e.value;
  const tab = [] //parametr 1 i 2
  zamien_na_liczbe(x,n,tab)
  opis.textContent = opisy[8];
  wynik.textContent = "string zaczynający sie od indeksu: "+ tab[0]+" i konczacy sie na indeksie "+tab[1]+" : "+x.substring(tab[0],tab[1])
  
  //console.log(tab)
})

slice.addEventListener('click',()=>{
  const x = tekst.value;
  let n = e.value;
  const tab = [] //parametr 1 i 2
  zamien_na_liczbe(x,n,tab)
  opis.textContent = opisy[9];
  wynik.textContent = x.slice(tab[0],tab[1])
  
  //console.log(tab)
})

replace.addEventListener('click',()=>{
  const x = tekst.value;
  let n = e.value;
  const tab = n.split(',')
  wynik.textContent = x.replace(tab[0],tab[1])
  opis.textContent = opisy[10];
  console.log(tab)
})




//funkcja zamieniajaca dane z 2 inputa na liczby
function zamien_na_liczbe(x,n,tab)
{
  for(let i=0;i<n.length;i++) //zamiana danych z inputa na dane
  {
    if(parseInt(n.length)>3)
    wynik.textContent = "zle dane!"
    else if(n[i]!=',')
    tab.push(parseInt(n[i])) //zamiana stringu na liczby
  }
  return tab;

}