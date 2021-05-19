// What are javascript objects
/*
{
"name": "Chaman",
"email": "thechaman.bharti@gmail.com",
"age": 32
};
*/

// creating objects

// empty object
// const person = {};

const person = {
  "name": "Chaman",
  "email": "thechaman.bharti@gmail.com",
  "age": 32
  };

// working with object properties
console.log('using dot notation');
console.log(person.name);
console.log(person.email);
console.log(person.age);

console.log('using name notation');
console.log(person['name']);
console.log(person['email']);
console.log(person['age']);

console.log('dynamic key name');
const keyName = 'name';
console.log(person[keyName]);

console.log('modify object');
person.name = 'Roshan';
person.age = 28;
person.salary = 50000;
console.log(person.name);
console.log(person.email);
console.log(person.age);
console.log(person.salary);

console.log('delete property from object');
delete person.salary;
console.log(person.age);
console.log(person.salary);

console.log('looping');
for(let key in person) {
 // console.log(key+" : "+person[key]);
  console.log(`${key} : ${person[key]}`);
}

const keys = Object.keys(person);
console.log('Keys:'+ keys);// Keys:name,email,age
const values = Object.values(person);
console.log('Values:'+ keys);// Values:

console.log('Equality');
/*
const person1 = {
  name: 'Roshan'
}
const person2 = {
  name: 'Roshan'
}
console.log(person1 ==  person2);//false
console.log(person1 ===  person2);//false
*/

const person1 = {
  name: 'Roshan'
}
const person2 = person1;
console.log(person1 ==  person2);//true
console.log(person1 ===  person2);//true

console.log('after change name of person 2')
person2.name = 'Chaman';
console.log(person1 ==  person2);// true
console.log(person1 ===  person2);// true
console.log(person1.name);// Chaman
// console.log(person2.name);// Chaman

console.log('ES6 Object Features');
const person3 = {
  name: 'Sahil'
}
const person4 = {...person3};
console.log(person3 ==  person4);// false
console.log(person3 ===  person4);// false

console.log('another approach');
const person5 = {
  first: 'Arhaan',
  last: 'Kabir',
  printName: function() {
    console.log(this.first, this.last);
  }
}
// const last = person5.last; //before ES6
const {last} = person5; //after ES6's object destructure
console.log(last);
// console.log(person5.printName);/[Function: printName]

const person6 = {
  last
}
console.log(person6);
