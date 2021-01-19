document.addEventListener('DOMContentLoaded', () =>{

//------- 1 ------------------------

 /* let arr = [1, 2, 3, 4 , 5, 6, 7];
  let a = 0;
  for (let i of arr){
        if ((i%2) == 0){
          a = a + i;  
          
      }     
  }
  console.log(a);
*/

//---------- 2 ----------------

   /*let number = Number(prompt());

   if (number > 0){
       alert('1')
   } else if (number < 0){
       alert('-1')
   } else if (number == 0){
       alert('0')
   } else{
       alert(' nu este numar')
   }*/

//------------ 3 -------------------



let styles = ["Jaz", "Blues"];
console.log(styles)

styles.push('Rock-n-Roll');
console.log(styles)

styles.splice(styles.length/2, 1, "Classica");
console.log(styles)

let shifted_item = styles.shift();
console.log(styles)

styles.unshift('Rap', 'Reggy')

console.log(styles)
console.log(shifted_item)

}) 