const persona ={
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25,
    attivo: true,
    num_corsi: 3,
}

console.log(typeof persona);
console.table(persona);
console.log(`La persona ha ${persona.eta} anni.`)

persona.attivo=false; //I valori delle proprietà possono cambiare senza che l'oggetto cambi natura
console.table(persona);

persona.citta='Milano';
console.table(persona);

delete persona.attivo;
console.table(persona);

console.log(persona['num_corsi']);
//si usa la bracket location [] quando nella chiave ci sono caratteri inattesi, in questo caso _ 
//si usa anche quando il valore che cerco si trova dentro una variabile
const myKey = 'nome';
console.log(persona[myKey]);

const studente = {
    nome: 'Aldo',
    cognome: 'Bianchi',
    eta: 28,
    indirizzo : {
        via: 'Roma',
        citta: 'Torino',
    },
    numCorsi: 3,
    attivo: true,
}

console.log (` Lo studente ${studente.nome} ${studente.cognome} abita a ${studente.indirizzo.citta}`);
console.table(studente);

const colors = ['rosso', 'verde', 'blu', 'giallo', 'nero'];
const numbers = [15, 85, 21, 4, 17];
const names= ['Gianluca', 'valerio', 'Pino', 'Paolo'];
const mixedArray= [
    'Nicola',
    25,
    {via:'Roma', civico:25, citta:'Napoli'},
    true,
];

console.table(colors);
console.table(numbers);
console.table(names);
console.table(mixedArray);

console.log(colors[1]);
console.log(colors.length);
console.log(colors[colors.length - 1]);

colors.push('marrone')
console.log(colors)

let deletedColor = colors.pop(); // .pop rimuove ultimo elemento
console.log(deletedColor);

let deletedNumber = numbers.shift(); // .shift rimuove primo elemento
console.log(deletedNumber);
console.log (numbers);

console.log(`la posizione del numero 85 è ${numbers.indexOf(85)}`);
numbers.unshift(15); // .unshift reinserisce il numero shiftato al primo posto e riscrive l'array
console.log(`la posizione del numero 85 è ${numbers.indexOf(85)}`);

names.length = 4;
console.log(names);
/*splice
Eliminazione degli elementi con indice 1 e 2 dall'array.*/
names.splice(1,2); //partendo da posizione 1, eliminane 2.
console.log(names);

//inserimento di due elementi in posizione specifica
names.splice(1, 0, 'Francesca','Nicola'); //partendo da posizione 1, eliminane 0 e inserisci i due nomi indicati.
console.log (names);

//nuovo array con splice
names.push('Valerio','Alberto','Lorenzo','Angelo')
console.log(names);

const deletedNames= names.splice(3,3)
console.log(`Nomi cancellati: ${deletedNames}`);
console.log(`Nuovo array names: ${names}`);

for (let i=0;i<names.length;i++) {
    console.log(names[i]);
}

const carrello = [
    {
    articleName: 'mouse',
    category: 'hardware',
    price:30,
    available:true,
    },
    {
        articleName:'monitor',
        category: 'accessory',
        price:110,
        available:false
    },
    {
        articleName:'keyboard',
        category: 'accessory',
        price:20,
        available:true,
    },
];

console.log('**********************');
console.log('Carrello:');
for (let i=0;i<carrello.length;i++) {
    console.log(`Articolo: ${carrello[i].articleName}`);
    console.log(`Categoria: ${carrello[i].category}`);
    console.log(`Prezzo: ${carrello[i].price}`);
    console.log(`Disponibile: ${carrello[i].available}`)
    console.log('-----');
};

carrello.push({
    articleName: 'Stampante',
    category: 'hardware',
    price: 80,
    available: false,
});

console.log('**********************');
console.log('Carrello:');
for (let i=0;i<carrello.length;i++) {
    console.log(`Articolo: ${carrello[i].articleName}`);
    console.log(`Categoria: ${carrello[i].category}`);
    console.log(`Prezzo: ${carrello[i].price}`);
    console.log(`Disponibile: ${carrello[i].available}`)
    console.log('-----');
};

carrello.splice(2,1);
console.log('**********************');
console.log('Carrello:');
for (let i=0;i<carrello.length;i++) {
    console.log(`Articolo: ${carrello[i].articleName}`);
    console.log(`Categoria: ${carrello[i].category}`);
    console.log(`Prezzo: ${carrello[i].price}`);
    console.log(`Disponibile: ${carrello[i].available}`)
    console.log('-----');
};

// I/Else if/Else
let eta=15;
if (eta>=18) {
    console.log ('sei maggiorenne');
};

let voto = 17;
if (voto>=18){
    console.log('Promosso');
} else {
    console.log('Bocciato');
}

let availability = 10;
if (availability>=20){
    console.log('Disponibile');
} else if(availability>=10 && availability<20){
    console.log('Necessita fornitura');
}else if (availability<10 && availability>=1) {
    console.log('In esaurimento');
} else {
    console.log('Non disponobile');
}

//Carrello condizionato
console.log('***************************');
console.log('Carrello:');
for (let i = 0; i < carrello.length; i++) {
    if (carrello[i].available===true){
        console.log(`Articolo: ${carrello[i].articleName}`);
        console.log(`Categoria: ${carrello[i].category}`);
        console.log(`Prezzo: ${carrello[i].price}`);
        console.log('-----');
    } else {
        console.log(`Articolo ${carrello[i].articleName} non disponibile`);
        console.log('-----');
    }
}

//Errore di assegnazione
let myValue=5;
if (myValue = 10)//Se scrivo così, mi riassegna il valore myValue a 10
{
    console.log('Il mio valore è 10'); //restituisce questo a causa della riassegnazione
} else {
    console.log (`Il mio valore è ${myValue}`); //per ottenere questo, va scritto if (myValue===10)
}

//Operatore ternario
let frequency=true;
const active= (frequency===true) ? 'Frequentante' : 'Non frequentante';
console.log(active);

//Operatori logici
let personAge=19;
let personCan = true; 
if (personAge<18 || !personCan) {
    console.log('Non può guidare');
} else {
    console.log ('Può guidare');
}

let abbonato; //se non assegno valore, legge sempre false
if(personAge>=18 && abbonato) {
    console.log('Può entrare');
} else {
    console.log('Non può entrare');
}

