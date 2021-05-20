
let person = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: `email@domain.com`
},
address: `Moldova`
}

person.contacts.phone='+37312345678';
delete person.address;

function findKey(obj) {
    for (prop in obj) {   
       if (prop === "phone"){
           obj[prop] = '+37312345678';
       }
       else{
            if (typeof obj[prop] === 'object'){
                findKey(obj[prop]);
            }
         
       }
   
  }}
  
  findKey(person);

console.log(person);

