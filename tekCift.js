// tek çift sayı bulma
const num = [];
const single = [];
const twin = [];

for (let i = 0; i < 10; i++) {
    let num2 = Number(prompt("Lütfen 10 adet sayı giriniz."))
    num.push(num2);
}
console.log(num);
for (let j = 0; j < num.length; j++) {
    if(num[j] % 2 === 0){
        twin.push(num[j]);
    }else{
        single.push(num[j]);
    }
    
}
console.log(single);
console.log(twin);