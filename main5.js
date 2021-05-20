window.addEventListener('click', function(e) {  
    console.log(e.value);
    let text = document.getElementById('text').value;
    
    localStorage.setItem('key.value', text);
  });

