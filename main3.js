class Person{
    constructor(a,b){
        this._name=a;
        this._surname=b;
       
    }

    get getName(){
        return this._name;
    }
    get getSurname(){
        return this._surname;
    }
    set setName(c){
        this._name = c;  
    }
    set setSurname(d){
        this._surname = d;  
     }
 
   
}
let worker =new Person('Ivan', 'Ivanov');

console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.setSurname='Петров'); //выведет 'Иванов'
console.log(worker.getSurname); //выведет 'Петров'
