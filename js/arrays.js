/* Nr. 1. */
console.log('-----Nr.1.------');

const masyvas = [];
for (let i = 1; i <= 20; i++) {
    masyvas.push(i);
}
console.log(masyvas);

/* Nr. 2. */
console.log('-----Nr.2.------');

const masyvas2 = [];
const randIlgis = rand(40, 60);
for (let i = 1; i < randIlgis + 1; i++) {
    masyvas2.push(i);

}
console.log(masyvas2);
function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Nr. 3. */
console.log('-----Nr.3.------');

const masyvas3 = [];
const randIlgis2 = rand(10, 15);
for (let i = 0; i < randIlgis2; i++) {
    masyvas3.push(rand(5, 47));
}

console.log(masyvas3);
console.log(Math.max(...masyvas3))

/* Nr. 4. */
console.log('-----Nr.4.------');

const masyvas4 = [];
const raides = 'D, E, F, G, H';
poRaide = raides.split(',');

for(let i = 0; i < (100/poRaide.length); i++) {
       masyvas4.push(...poRaide);
}

console.log(masyvas4);

/* Nr. 5.  */
console.log('-----Nr.5.------');
const masyvas5 = [];
const raide1 = 'M';
const raide2 = 'N';
const raide3 = 'O';
const raide4 = 'P';
sumRaide1 = 0;
sumRaide2 = 0;
sumRaide3 = 0;
sumRaide4 = 0;
for (i = 0; masyvas5.length < 100; i++) {
    masyvas5.push(raide1);
    sumRaide1 += 1;
    masyvas5.push(raide2);
    sumRaide2 += 1;
    masyvas5.push(raide3);
    sumRaide3 += 1;
    masyvas5.push(raide4);
    sumRaide4 += 1;

}
console.log(masyvas5);
const masyvas5a = [sumRaide1, sumRaide2, sumRaide3, sumRaide4];
biggestNum = -Infinity;
for (i = 0; i< masyvas.length; i++) {
    if(biggestNum < masyvas5a[i]){
        biggestNum = masyvas5a[i]
    } else if(biggestNum === masyvas5a[i]) {
        biggestNum === biggestNum || masyvas5a[i]
    }
} 


/* Nr. 6. */
console.log('-----Nr.6.------');

const masyvas6 = [];
for (let i = 0; masyvas6.length < 20; i++){
    let atsitiktinis = rand(10, 50);
    for (let i = 0; i < masyvas6.length; i++){
        if (atsitiktinis === masyvas6[i]) {
            atsitiktinis = rand(10, 50); 
            i = -1;
        } else continue;
    } masyvas6.push(atsitiktinis)
}
console.log(masyvas6)