
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
let b = 9;
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

n = 11;
if ((n % 3) === 0) {
     console.log('Trikampi sudelioti galima');
} else {console.log('Trikampio sudelioti negalima');
}

if((n % 3) !== 0) {
     console.log('Trikampio sudelioti negalima');
} else  {console.log('Trikampi sudelioti galima');
}

/* Nr. 7 * NETEISINGAS */
console.log('Nr7');

let m = 50
if(m == 2) {
    console.log('28');
} else if(m == 4) {
    console.log('30');
} else if(m == 6) {
    console.log('30');
} else if(m == 9) {
    console.log('30');
} else if(m == 11) {
    console.log('30');
} else if(m <= 12, m !==0) {
    console.log('31');
}
/* Nr 8 */
console.log('Nr8')

k = 6;
if(k % 2 === 1) {
    console.log('Kambari tvarkys jaunelis');
} else {console.log('Kambari tvarkys vyresnelis');
}

/* Nr9 */
console.log('Nr9')

m = 1904;
if((m - 1896) % 4 == 0) {
   console.log((m - 1896)/ 4 + 1);
} else {console.log('Metai neolimpiniai');
}

m = 1908;
let om = m - 1896;
if(om % 4 == 0) {
    console.log(om / 4 + 1);
} else {console.log('Metai neolimpiniai');
}


/* 10 */
console.log('Nr10')

let v1 = 8;
let m1 = 29;
let m2 = 23;
let v = 9;
m = 5;

if((v * 60 + m) - (v1 * 60 + m1 + m2) >= 0) {
    console.log('Petras i pamoka nepaveluos');
} else {console.log('Petras i pamoka paveluos');
}


const isejimoLaikas = v1 * 60 + m1;
const pamokosPradzia = v * 60 + m;
if((pamokosPradzia - isejimoLaikas - m2) >= 0) {
    console.log('Petras i pamoka nepaveluos');
} else {console.log('Petras i pamoka paveluos')}

             
