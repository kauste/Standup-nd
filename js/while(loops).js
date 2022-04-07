/* Nr.1. */
console.log('-------Nr.1.-------');

let sum = 0
while (sum < 100) {
    let atsitiktinis = rand(1, 10);
    console.log(atsitiktinis);
    sum += atsitiktinis;
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Nr.2. */
console.log('-------Nr.2.-------');

sum = 0;
let atsitiktinis2 = rand(1, 10);

while(sum % 7 > 0 || sum === 0) {
    console.log(sum)
     sum += atsitiktinis2;
    let atsitiktinis2 = rand(1, 10);
    console.log('atsitiktinis:', atsitiktinis2);
   
    console.log(sum)
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Nr.3. */
console.log('-------Nr.3.-------');

let m = 17; //knygos skyriai;
let n = 0; // viso skyriu
let d = 0; // diena
let s = 0; // skyriai ta diena
while (n <= m) {
    s += 1;
    n += s;
    d++;
}

console.log(`Tadas knyga perskaitys per ${d} diena, per viena diena vidutiniskai perskaitys ${m / d} skyriu`);

/* Nr.4. */
console.log('-------Nr.4.-------');

let atsitiktinis3 = 0;
while(atsitiktinis3 !== 5) {
    atsitiktinis3 = rand(0, 10);
    console.log(atsitiktinis3);
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Nr.5. */
console.log('-------Nr.5.-------');

let ciklai = 0;
let atsitiktinis4 = 0;
while(atsitiktinis4 !== 5 && atsitiktinis4 !== 7) {
    atsitiktinis4 = rand(0, 10);
    ciklai++;
    console.log(` ${ciklai} atsitiktinis skaicius:`, atsitiktinis4);
    
    
}
console.log(`Prasisuko ${ciklai} ciklai.`);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

