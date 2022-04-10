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

let bigNum = 0;
for (i = 0; i < masyvas3.length; i++) {
    if(masyvas3[i]> bigNum) {
        bigNum = masyvas3[i];
    } 
}
console.log(masyvas3);
console.log(bigNum)



/* Nr. 4. */
console.log('-----Nr.4.------');

const masyvas4 = [];
const raides = ['D', 'E', 'F', 'G', 'H'];

for(let i = 0; i < 100; i++) {
       masyvas4.push(raides[rand(0, 4)]);
}

console.log(masyvas4);

/* Nr. 5.  */
console.log('-----Nr.5.------');
const masyvas5 = [];
const raides2 = ['A', 'B', 'C', 'D']
sumA = 0;
sumB = 0;
sumC = 0;
sumD = 0;
for (i = 0; i < 100; i++) {
    atsitiktine = raides2[rand(0, 3)];
    masyvas5.push(atsitiktine);
    if (atsitiktine === 'A') {
        sumA += 1;
    }
    if (atsitiktine === 'B') {
        sumB += 1;
    }
    if (atsitiktine === 'C') {
        sumC += 1;
    }
    if (atsitiktine === 'D') {
        sumD += 1;
    }
}
console.log(masyvas5);
const masyvas5a = [sumA, sumB, sumC, sumD];
biggestNum = -1;
for (i = 0; i< masyvas5a.length; i++) {
    if(biggestNum < masyvas5a[i]){
        biggestNum = masyvas5a[i]
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