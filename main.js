document.addEventListener('DOMContentLoaded', ()=>{


    
    document.body.style.background="red";

    function chngColor(){
    document.body.style.background="green";
}
    
    setTimeout(chngColor, 3000);

    document.querySelector("#btn").addEventListener('click', ()=>{
        document.body.style.background="orange";
    })

      let ol = document.querySelector('#ol');
     function set_li (){
        for (let i=1; i<=20; i++){
            
            
          (i%2 == 0)?
            ol.innerHTML+=`
            <li style="color:green">Элемент ${i}</li>
            `
            :
            ol.innerHTML+=`
            <li style="color:purple">Элемент ${i}</li>
            `
        
        }
     }
     set_li();
    
})