/* Nr.1. */
console.log(`--Nr.1.--`);

function sum(x, y) {
    return `x + y = ${x + y}`;
}

const z = sum(5, 75);
console.log(z);

/* Nr.2. */
console.log(`--Nr.2.--`);

function palyginimas(x, y) {
    return `x > y is ${x > y}, x < y is ${x < y}, x = y is ${x == y}.`
}

const w = palyginimas(7, 9)
console.log(w)

/* Nr.3. */
console.log(`--Nr.3.--`);

function metai(d) {
    return `${d}`
}

const d1 = metai(2040)
if (d1 % 4 === 0 && d1 % 100 !== 0 || d1 % 400 === 0 ) {
    console.log ('keliamieji') 
} else {console.log('nekeliamieji')
}

/* Nr.4. */
console.log(`--Nr.4.--`);

function kvadratas(x) {
    return `${x} pakeita kvadratu yra lygu ${x ** 2}`
}

const keliamasis = kvadratas(5);
console.log(keliamasis)

/* Nr.5. */
console.log(`--Nr.5.--`);


/* Nr.6. */
console.log(`--Nr.6.--`);



/* Nr.7. */
console.log(`--Nr.7.--`);


function raides(zodyje) {
    return `Zodis ${zodyje} turis ${zodyje.length} raides`
}

const priklauso = raides('teletabis')
console.log(priklauso)

/* Nr. 9 */
console.log(`--Nr.9.--`);

function tekstai(e, f) {
    return `Pirmas tekstas turi ${e.length} raidziu, antras tekstas turi ${f.length} raidziu.}`
}

const t = tekstai('Kieme isproteje zmones vidury nakties drozia motociklus', 'Tuo tarpu as normali naktim mokausi.') 
console.log(t)

/* Nr. 10 */
console.log(`--Nr.10.--`);

const zodis = 'Sarlatanas';
const zodisLength = zodis.length;
 let suma = 0;
for (i = 0; i < zodis.length; i++) {
    if(zodis[i] == 'a')
    suma += 1;
}

console.log(suma)



