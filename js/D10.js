/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// RISPOSTA

// CREO UNA VARIABILE = 0
let sum;

// GLI INSERISCO I VALORI SOMMATI
sum = 10 + 20;

// console.log('sum = ' + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// RISPOSTA

// CREO UNA VARIABILE RANDOM = 0
let random;

// INSERISCO ALLA VARIABILE IL METODO RANDOM MOLTIPLICATO X 21
random = Math.floor(Math.random() * 21);
// console.log('Il risultato random è: ' + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

// RISPOSTA

const me = {
  name: 'Kevin',
  surname: 'Ramil',
  age: 26,
};

// console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// RISPOSTA

delete me.age;
// console.log('Oggetto con la rimozione', me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

// RISPOSTA
// Inserisco l'array

me.skills = ['HTML', 'CSS', 'JavaScript'];
// console.log('Nuovo oggetto', me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

// // RISPOSTA

// Pusho "C++" nell'array skill dentro l'oggetto me

me.skills.push('C++');
// console.log('Con aggiunta di C++', me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

// RISPOSTA

me.skills.pop();
// console.log("Tolto l'ultimo elemento nell'array", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

// RISPOSTA

const dice = function (n) {
  return (n = Math.ceil(Math.random() * 6));
};

// console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// RISPOSTA

const whoIsBigger = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
// console.log(whoIsBigger(30, 20));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// RISPOSTA

const splitMe = function (str) {
  let arr = str.split(' ');
  return arr;
};
// console.log(splitMe('I love coding'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

// RISPOSTA

const deleteOne = (str, bool) => {
  // chiedo se bool (true o false) sia uguale a true
  if (bool === true) {
    // se sono uguali tolgo la prima lettera
    return str.slice(1);
    // altrimenti tolgo l'ultima
  } else if (bool === false) {
    return str.slice(0, -1);
  }
};

// console.log(deleteOne('Ciao Mondo', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// RISPOSTA

// NON MI FUNZIONA
const onlyLetters = (str) => {
  return str.replace([0 - 9], '');
};

// console.log(onlyLetters('I have 4 dogs'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// RISPOSTA

const isThisAnEmail = (str) => {
  // chiedo se nella stringa contiene @ e .
  if (str.includes('@') && str.includes('.')) {
    return true;
  } else {
    return false;
  }
};

// console.log('Questa email è: ' + isThisAnEmail('ciao@libero.it'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// RISPOSTA

const whatDayIsIt = (n) => {
  // creo un'array con i gg della settimana
  const week = [
    "Luned'",
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
  ];
  n = new Date();
  for (let i = 0; i < week.length; i++) {
    // siccome new Date parte da domenica, lo inizializzo con il gg precetende, lo decremento di 1
    return week[n.getDay() - 1];
  }
};
// console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// RISPOSTA

const rollTheDices = (n) => {
  let value = []; // creo array vuoto
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let numCasuale = dice();
    value.push(numCasuale); // pusho il/i numero/i casuale nell'array
    sum += numCasuale;
  }
  return { value, sum };
};
let result = rollTheDices(4);
// console.log('Numeri generati', result.value, 'Somma :', result.sum);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// RISPOSTA

// INCOMPLETO :(
const howManyDays = (n) => {
  n = new Date();
};

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// RISPOSTA

// INCOMPLETO :(
const isTodayMyBirthday = (n) => {
  n = new Date();
};

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

// SE SPOSTO L'ARRAY INFONDO NON MI FUNZIONA MA SPOSTANDOLO SOPRA SÌ

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// RISPOSTA

// Creo un'oggetto con dentro degli attributi
let parola = { Nome: 'Kevin', Cognome: 'Ramil', Età: 26 };

const deleteProp = (n, str) => {
  delete n[str]; // Elimino str
  return n;
};

// console.log(deleteProp(parola, 'Cognome'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// RISPOSTA

const newestMovie = () => {
  let newest = movies[0]; // inizializzo newst con movies che parte da 0
  // con il for vado a ricercare nell'array movies
  for (let i = 0; i < movies.length; i++) {
    // Se year di movies cercato cercato con l'indice
    if (movies[i].Year > newest.Year) {
      // movies prende l'elemento cercato
      newest = movies[i];
    }
  }
  return newest;
};

// console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => {
  return movies.length; // length perchè è la lunghezza dell'array
};

// console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  const arrMovie = []; // creo l'array vuoto
  for (let i = 0; i < movies.length; i++) {
    // pusho l'anno di movies nell'array vuoto ogni volta che l'indice trova "year"
    arrMovie.push(movies[i].Year);
  }
  return arrMovie;
};

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

// RISPOSTA

const onlyInLastMillennium = () => {
  return movies.filter((movie) => {
    //trasformo le stringhe dell'anno in valori numerici e gli chiedo se sono minori o uguali a 2000
    if (parseInt(movie.Year) <= 2000) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// RISPOSTA

const sumAllTheYears = () => {
  let somma = 0;
  for (let i = 0; i < movies.length; i++) {
    // trasformo le stringhe degli anni in numeri e faccio la somma totale
    somma += parseInt(movies[i].Year);
  }
  return somma;
};

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// RISPOSTA

const searchByTitle = (str) => {
  //ritorno solo se trovo un parametro titolo
  return movies.find((titolo) => {
    // rutorno se il parametro titolo è uguale alla stringa della funzione
    return titolo.Title === str;
  });
};

console.log(searchByTitle('Lord of the Flies'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// RISPOSTA

const searchAndDivide = (str) => {
  // creo un'oggetto con dentro 2 array
  const result = { match: [], unmatch: [] };
  for (let i = 0; i < movies.length; i++) {
    // chiedo se il titolo dentro il parametro inizializzato è uguale al titolo di movies
    if (movies[i].Title.includes(str)) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }
  return result;
};

console.log(searchAndDivide('Avengers'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// RISPOSTA

const removeIndex = (n) => {
  // creo una copia dell'array di movies
  const movies2 = [...movies];
  // chiedo se il parametro è uguale a 0 e minore della lunghezza dell'array
  if (n >= 0 && n < movies2.length) {
    movies2.splice(n, 1);
  }
  return movies2;
};

console.log(removeIndex(13));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// RISPOSTA

const findId = () => {
  const id = document.getElementById('container');
};
findId();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// RISPOSTA

const findTag = () => {
  const td = document.getElementsByClassName('td');
};

findTag();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// RISPOSTA

const printTd = () => {
  const findTd = document.getElementsByTagName('td');
  for (let i = 0; i < findTd.length; i++) {
    console.log(findTd[i].textContent); //HO DOVUTO CERCARE .textContent
  }
};

printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

// RISPOSTA

const red = () => {
  const link = document.getElementsByTagName('a');
  for (let i = 0; i < link.length; i++) {
    link[i] = style.backgroundColor = 'red ';
  }
};
red();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addList = () => {
  const id = document.getElementById('myList');
  const newLi = document.createElement('li'); // <li></li>
  newLi.textContent = 'Elemento Prova';
  id.appendChild(newLi); // <ul id="myList"><li></li></ul>
};

// addList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// RISPOSTA

const remove = () => {
  const li = document.getElementById('myList');
  if (li) {
    li.remove();
  }
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(n) {
  // chiedo se il parametro < 2 allora ritorna falso
  if (n < 2) return false;
  // parto da 2 finchè non trova un numero minore o uguale alla sua radice quadrata
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // se il parametro ha come resto 0 allora ritorna falso
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isItPrime(50));
