
document.addEventListener('DOMContentLoaded', ()=>{

    let our_table = document.querySelector('#table');

     let tbl=""


    tbl+=`<table border="1px">`
    for (let i=1; i<=8; i++){
        tbl+=`<tr >`;

        for( let j=1; j<=8; j++){
            if(i%2 ==  j%2){
              tbl+= `<td bgcolor="white" width="20" height="20"></td>`;
            } else{
            tbl+= `<td bgcolor="#1C0601" width="20" height="20"></td>`;
        }}
       `</tr>`;
    }
    tbl+=`</table>`

    our_table.innerHTML=tbl;
    

})