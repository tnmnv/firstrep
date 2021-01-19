document.addEventListener('DOMContentLoaded', () =>{
 

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /*for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }*/

    /*let i=0;
    while(i < arr.length){
        console.log(arr[i])
        i++;
    }*/

    /*let i=0;
     do{
        console.log(arr[i])
        i++;}
    while(i < arr.length)*/

   /* for (let i in arr){
        console.log(arr[i])
    }*/
    
    /*let i ;
    for (i of arr){
        console.log(i)
    }*/

    /* arr.forEach(myFunc)
    function myFunc(val){
    console.log(val)
    }*/

     
     let myFunc = val => console.log(val)
     arr.map(myFunc)

     let alta_metoda = arr.join();
     console.log(alta_metoda)
}) 