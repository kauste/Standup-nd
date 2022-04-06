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
    if(typeof x !== 'number' || typeof y !== 'number' || '' + x === NaN || '' + y === NaN){
        return 'ERROR';
    } else if (x > y) {
        return `${x} > ${y}`;
    } else if( x < y) {
        return `${x} < ${y}`;
    } else if(x === y) {
        return `${x} = ${y}`;
    } else return 'ERROR';
}

console.log(palyginimas(Infinity, 9));

/* Nr.3. */
console.log(`--Nr.3.--`);

function metai(d) {
    if (d % 4 === 0 && d % 100 !== 0 || d % 400 === 0 ) {
        console.log ('keliamieji');
    } else {
        console.log('nekeliamieji');
    }
}
metai(2040);

/* Nr.4. */
console.log(`--Nr.4.--`);

function kvadratas(x) {
    return `${x} pakeita kvadratu yra lygu ${x ** 2}`
}

const keliamasis = kvadratas(5);
console.log(keliamasis)

/* Nr.5. */
console.log(`--Nr.5.--`);

sum = 0;
function skaicius (a) {
    if(a > 1) {
        for (i = 1; i <= a; i++){
            sum += i;   
        } return sum;
    } else return 'ERROR'
}
console.log(skaicius(1))

/* Nr.6. */
console.log(`--Nr.6.--`);
sum = 0;
function argumentas(x) {
    for(i = 0; i < x; i++) {
        if(x % i === 0){
            sum += 1;
        } 
    } return sum;
}

console.log(argumentas(32));

/* Nr.7. */
console.log(`--Nr.7.--`);

function raides(zodyje) {
    return `Zodis ${zodyje} turis ${zodyje.length} raides`;
}

const priklauso = raides('teletabis');
console.log(priklauso);

/* Nr.8. */
console.log(`--Nr.8.--`);

function telefonoNumeris (masyvas) {
    return `(${m[0]}${m[1]}${m[2]}) ${m[3]}${m[4]}${m[5]}-${m[6]}${m[7]}${m[8]}${m[9]}`;
}

let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(telefonoNumeris(m));

/* Nr.8. ANTRAS APSUNKINTAS VARIANTAS */
console.log(`--Nr.8. ANTRAS APSUNKINTAS VARIANTAS--`);

const m2 = [8, 2, 3, 4, 5, 2, 7, 8, 9, 0];
let visasNumeris = ''
let visasNumeris1 = ''
let visasNumeris3 = ''
function telefonoNumeris2 (masyvas2) {
    for (i = 0; i < 3; i++) {
        visasNumeris += m2[i];
    } for (i = 3; i < 6; i++) {
        visasNumeris1 +=m2[i];
    } for (i = 6; i <= 9; i++) {
        visasNumeris3 += m2[i];  
    } console.log(`(${visasNumeris}) ${visasNumeris1}-${visasNumeris3}`);
} 

console.log(telefonoNumeris2(m2));

/* Nr. 9 */
console.log(`--Nr.9.--`);

function tekstai(e, f) {
    return `Pirmas tekstas turi ${e.length} raidziu, antras tekstas turi ${f.length} raidziu.`;
}

const t = tekstai('Kieme isproteje zmones vidury nakties drozia motociklus', 'Tuo tarpu as normali naktim mokausi.'); 
console.log(t);

/* Nr. 10 */
console.log(`--Nr.10.--`);

const zodis = 'Baobabas';
 let suma = 0;
for (i = 0; i < zodis.length; i++) {
    if(zodis[i] == 'a');
    suma += 1;
}

console.log(suma);

