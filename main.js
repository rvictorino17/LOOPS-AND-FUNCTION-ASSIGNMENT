for (var i= 1; i <= 10; i++) {
    console.log (i);
}
   
function powOfNum (b,e) {
    pow = 1;
    for (var i = 0; i<e; i++) {
    pow = pow*b;
    }
return pow;
}
console.log(powOfNum(6,2))

function addNumbersBetween (startNum, endNum) {
let total = 0;
for (let i = startNum; i<= endNum; i++) {
total += i;

    }
return total;

}
let sum = addNumbersBetween (1,20);
console.log(sum);