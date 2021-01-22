document.addEventListener('DOMContentLoaded', ()=>{
 
    
    
    let input = document.getElementById('digit');
    let val = document.querySelector('input').value;
    console.log(val);

    
    
    document.getElementById('btn_minus').addEventListener('click',()=>{
        document.getElementById('btn_plus').removeAttribute('disabled');

       
       if (val > 1){

        val = val-1;
       input.value= val;
       
       }else{

        document.getElementById('btn_minus').setAttribute('disabled', true);
        
        
       }
        
    })
    document.getElementById('btn_plus').addEventListener('click',()=>{
        
    document.getElementById('btn_minus').removeAttribute('disabled');
    
         
        if (val < 9){
 
         val = Number(val) + 1;
        input.value= val;
        
        }else{
 
    document.getElementById('btn_plus').setAttribute('disabled', true);
   
         
        }
         
     })




})