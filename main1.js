let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


function calc(i){
let sum = 0;
for (item of Object.values(i)){
    sum = sum+ item;
    
}
return (sum);
  }
console.log(calc(salaries));