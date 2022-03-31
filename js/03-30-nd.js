
/* Nr.1*/
console.log('Nr1')

let n = 20;
if(n > 0) {
    console.log('geras');
} else {console.log('blogas');
}

/* Nr.2*/
console.log('Nr2')

n = 2;
if(n == 1) {
    console.log('Eikite');
} else {console.log('Palaukite');
}

n = 2;
if(n =! 2) {
    console.log('Eikite');
} else {console.log('Palaukite');
}

/* Nr. 3 */
console.log('Nr3')

n = 2;
let d = 3;
let k = 18;
n = 5;
if(d * n >= k) {
    console.log('Telpa');
} else {
    console.log('Netelpa');
}

if(k / n < d) {
    console.log('Telpa');
} else { console.log('Netelpa');
}

/* Nr. 4 */
console.log('Nr4');

let a = 7;
let b= 9;
if(a > b) {
    console.log(--a, ++b);
} else {console.log(++a, --b);
}

/* Nr. 5 */
console.log('Nr5');

let c = 50;
let p = 20; 
console.log('Saulius nusipirks ' + Math.floor(c / p) + ' porcijas, liks ' + c % p + ' centu')




/* Nr. 6 */
console.log('Nr6');

n = 12;
if ((n %= 3) === 0) {
     console.log('Trikampi sudelioti galima');
} else {console.log('Trikampio sudelioti negalima');
}

if((n %= 3) !== 0) {
     console.log('Trikampio sudelioti negalima');
} else  {console.log('Trikampi sudelioti galima');
}

/* Nr. 7 */
console.log('Nr7');
m = 7
b = [1, 3, 5, 7, 8, 10, 12]
a = [ 4, 6, 9, 11, 12];
c = 2


/* Nr 8 */
console.log('Nr8')

k = 6;
if(k %= 2) {
    console.log('Kambari tvarkys jaunelis');
} else {console.log('Kambari tvarkys vyresnelis')}

/* Nr9 */
console.log('Nr9')

m = 1904;

if((m - 1896) % 4 == 0) {
    console.log((m - 1896)/ 4 + 1);
}   else console.log('Metai neolimpiniai')


m = 2005;

om = m - 1986;
if(om %= 4 == 0) {
    console.log(om / 4 + 1);
}   else console.log('Metai neolimpiniai')

/* 10 */
console.log('Nr10')

let v1 = 8;
let m1 = 29;
let m2 = 23;
let v = 9;
m = 5;

if((v * 60 + m) - (v1 * 60 + m1 + m2) >= 0) {
    console.log('Petras i pamoka nepaveluos');
} else {console.log('Petras i pamoka paveluos')}

const isejimoLaikas= v1 * 60 + m1;
const pamokosPradzia= v * 60 + m;
if((pamokosPradzia - isejimoLaikas - m2) >= 0) {
    console.log('Petras i pamoka nepaveluos');
} else {console.log('Petras i pamoka paveluos')}

             
