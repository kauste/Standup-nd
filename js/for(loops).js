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

for(let n = 0; n <41; n += 10) {
    console.log(n);
}

/* Nr.4. */
console.log('--Nr.4.--')

for(let n = 49; n <54; n++) {
    console.log(n);
}

/* Nr.5. */
console.log('--Nr.5.--');

for (i = 0; i <5; i++) {
    console.log(rand(1, 10));
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

let indelis = 100;
let palukanosProc = 0.02;
n = 5;
let suPalukanom = indelis;
for(i = 1; i <= n; i++) {
    suPalukanom += suPalukanom * palukanosProc;
    palukanos = suPalukanom - indelis;
    console.log(`Klientas i saskaita idejo ${indelis} eur. Po ${i} metu buvs ${palukanos} eur palukanu. `);
    // indelis = suPalukanom; ???? Vis tiek nsupratau ar reikia ataskaitoje pateikti, kiek kasmet palukanu gaus ar kiek bus sukaupes per kelis metus.
}

    /* Nr.10. */
console.log('--Nr.10.--')

for( let m = 0; m < 2022; m += 4) {
        if (m % 400 === 0) {
            console.log(m)
        } else if (m % 100 !== 0)
  console.log(m)} 

let d1 = 400;
 if (d1 % 4 === 0 && d1 % 100 !== 0 || d1 % 400 === 0 ) {
            console.log ('keliamieji') 
     } else {console.log('nekeliamieji')
}
















