/*FOR CIKLAS*/
/* Nr.1. */
console.log('--Nr.1.--')

for (let n = 50; n < 55; n++) {
    console.log('Labas');
}

/* Nr.2. */
console.log('--Nr.2.--')

for (let n = 0; n < 5; n++) {
    console.log(n);
}

/* Nr.3. */
console.log('--Nr.3.--')

for(let n = 0; n <51; n += 10) {
    console.log(n);
}

/* Nr.4. */
console.log('--Nr.4.--')

for(let n = 49; n <54; n++) {
    console.log(n);
}

/* Nr.5. */
console.log('--Nr.5.--');

function rand(min, max) {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
} 

/* Nr.6. */
console.log('--Nr.6.--');

for(let n = 1; n < 21; n++) {
    if(n % 3 !== 0) {
        console.log(n);
    }
}

/* Nr.7. */
console.log('--Nr.7.--');

let m = 5
for(let i = 1; i < 11; i++) {
    sandauga = m * i
    console.log(i + '*' + m + '=' + sandauga);
}

/* Nr.8. */
console.log('--Nr.7.--');

n = 12;
for(let i = 1; i < n; i++){
    let convert = 2.54 * i
    console.log(`${i} cm = ${convert} in`);
}

/* Nr.9. */
console.log('--Nr.9.--')

let saskaita = 100;
let palukanos = 0.02;
const indelioLaikas = 2006;
const dabartiniaiMetai = 2022;
const pradinisIndelis = saskaita;
const praejesLaikas = dabartiniaiMetai - indelioLaikas;

for(let m = 0; m < praejesLaikas-1 ; m++) {
    saskaita += (saskaita * palukanos)
    }
   saskaitaPries = saskaita;

for(let m = 0; m < 1; m++) {
    saskaita += (saskaita * palukanos)
    }

    console.log(`Gerbiamas kliente, rašome Jums norėdami pateikti atasakaitą dėl Jūsų sąskaitos, ${dabartiniaiMetai} metu Jūsų sąskaitoje yra ${saskaita} eur., preėjusių metų indėlis buvo ${saskaitaPries} eur, tad Jūsų sąskaita šiais metais paaugo ${saskaita - saskaitaPries} eur. Primename, kad pradinis indėlis padarytas ${indelioLaikas}, sąskaita buvo papildyta ${pradinisIndelis}, tad viso Jūsų sąskaita paaugo ${saskaita - pradinisIndelis}`)

    /* Nr.10. */
console.log('--Nr.10.--')


for( let m = 0; m < 2022; m += 4) {
        if (m % 400 === 0) {
            console.log(m)
        } else if (m % 100 !== 0)
  console.log(m)} 













