for(let i = 1; i < 11; i++){
    console.log(`i = ${i}`);
}

for(let h = 10; h > 0; h--){
    console.log(`h = ${h}`);
}

let m = 0;

while(m < 10){
    m++;
    console.log(`m = ${m}`);
}

let n = 11;

while(n > 1){
    n--;
    console.log(`n = ${n}`);
}

let s = 0;

do{
    s++;
    console.log(`s = ${s}`);
} while(s < 10);

let t = 11;

do{
    t--;
    console.log(`t = ${t}`);
} while(t > 1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let number of numbers){
    console.log(number);
}
