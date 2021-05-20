class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + '  ' + this.surname;
	}
}

class Student extends User {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    };

    getCourse(){
        let date =  new Date().getFullYear();
        let course = date - this.year;
        switch (course) {
            case 1:console.log( `1 - третий курс, так как текущий год ${date}`);
            break;
            case 2:console.log( `2 - третий курс, так как текущий год ${date}`);
            break;
            case 3:console.log( `3 - третий курс, так как текущий год ${date}`);
            break;
            case 4:console.log( `4 - третий курс, так как текущий год ${date}`);
            break;
            case 5:console.log( `5 - третий курс, так как текущий год ${date}`);
            break;
        }
    }

}

var student = new Student('Иван', 'Иванов', 2018);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2018
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2021 

