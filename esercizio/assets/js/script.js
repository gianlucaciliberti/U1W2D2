/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/


/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
    nome: 'Gianluca',
    cognome: 'Ciliberti',
    eta: 25,
    citta: 'Torino',
}
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vivo a ${persona.citta}.`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
persona.email = 'Email'
delete persona.eta;
console.log(persona);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
    indirizzo: {
        via: 'Roma',
        citta: 'Torino',
        CAP: '10100',
    }
};
console.log(`Il Cap è ${utente.indirizzo.CAP}`);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
keyWord = 'nome';
console.log(`Valore di nome: ${persona[keyWord]}`);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 15;
let b = 16;
let c = 16;
if (a > b && a > c) {
    console.log(`${a} è il numero più grande`);
} else if (b > a && b > c) {
    console.log(`${b} è il numero più grande`);
} else if (c > a && c > b) {
    console.log(`${c} è il numero più grande`);
} else {
    console.log('Pareggio');
};

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let total = 35;
let spedition;
if (total >= 50) {
    spedition = 'gratuita';
    console.log(`Totale carrello: ${total}- Spedizione: ${spedition} - Totale finale: ${total}`)
} else {
    spedition = 9.90;
    console.log(`Totale carrello: ${total}- Spedizione: ${spedition} - Totale finale: ${total + spedition}`)
};
;

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const mixedArray = [
    42,
    'ciao',
    true,
];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        console.log(`${mixedArray[i]} è un numero`);
    } else {
        console.log(`${mixedArray[i]} non è un numero`);
    }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [];
numbers.push(1, 2, 3, 4, 5);
numbers.unshift(0);
console.log(numbers);
console.log(`Lunghezza: ${numbers.length}`)


/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const schoolObject = [
    'Penna',
    'Quaderno',
    'Zaino',
    'Astuccio',
]
console.log(schoolObject);

schoolObject.splice(1, 1);
console.log(schoolObject);

schoolObject.splice(1, 0, 'Diario');
console.log(schoolObject);



/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
    'Penna',
    'Quaderno',
    'Zaino',
]
console.log(`Zaino è in carrello? ${prodotti.includes('Zaino')}`);
console.log(`La posizione è ${prodotti.indexOf('Zaino')}`);

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const carrello = [
    {
        nome: 'Penna',
        price: 7,
        disponibile: true,
    },
    {
        nome: 'Quaderno',
        price: 4,
        disponibile: true
    },
    {
        nome: 'Diario',
        price: 5.5,
        disponibile: false,
    },
    {
        nome: 'Astuccio',
        price: 12,
        disponibile: true,
    }
];

for (let i = 0; i < carrello.length; i++) {
    if (carrello[i].disponibile === true && carrello[i].price < 10) {
        console.log(`OFFERTA: ${carrello[i].nome} (${carrello[i].price})`);
    } else if (carrello[i].disponibile === true && carrello[i].price >= 10) {
        console.log(`${carrello[i].nome} - (${carrello[i].price})`);
    } else {
        console.log(` ${carrello[i].nome}: Esaurito`);
    }
};

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ordinated = [
    1,
    2,
    3,
    4,
    5,
];

const inverso = [];
for (let i = 0; i < ordinated.length; i++) {
    inverso.push(ordinated.length);
}
console.log(inverso)


