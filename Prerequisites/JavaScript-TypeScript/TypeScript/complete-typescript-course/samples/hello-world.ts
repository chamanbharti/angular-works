// var message = 'Hello World!';
// console.log(message);

// var message: string = 'Hello World!';
// console.log(message);

// var message: string | number = 'Hello World!';
// console.log(message);
// message = 12;
// console.log(message);

// var message = 'Hello World!';
// if(message) {
//     var i: number;
//     for (i=0;i<3;i++){
//         console.log(message+' '+i)
//     }
// }
// console.log('Value of i = '+i)

// var message = 'Hello World!';
// if(message) {
//     let i: number;
//     for (i=0;i<3;i++){
//         console.log(message+' '+i)
//     }
// }
// console.log('Value of i = '+i)

// const message = 'Hello World !';
// message = '';
// console.log(message);

// const messaage = {
//     hello:'Hello World !'
// };
// messaage = null;

// const messaage = {
//     hello:'Hello World !'
// };
// messaage.hello = null;

// let message2 = messaage;
// message2 = null;

// function
// const message = 'Hello World !';
// const sayHello = function(message) {
//     console.log(message);
// }
// sayHello(message);

// const message = 'Hello World !';
// const sayHello = (message) =>{
//     console.log(message);
// }
// sayHello(message);

// const message = 'Hello World !';
// const sayHello = message =>{
//     console.log(message);
// }
// sayHello(message);

// const message = 'Hello World !';
// const sayHello = message => console.log(message);
// sayHello(message);

// function Person(name) {
//     this.name = name;
//     this.sayHi = function() {
//         setTimeout(function() {
//             console.log('Hello my name is ' + this.name);
//         },1000)
//     }
// }
// const person = new Person('Chaman');
// person.sayHi();//Hello my name is undefined

// function Person(name) {
//     this.name = name;
//     var that = this;
//     this.sayHi = function() {
//         setTimeout(function() {
//             console.log('Hello my name is ' + that.name);
//         },1000)
//     }
// }
// const person = new Person('Chaman');
// person.sayHi();//Hello my name is Chaman

function Person(name) {
    this.name = name;
    this.sayHi = function() {
        setTimeout( () =>{
            console.log('Hello my name is ' + this.name);
        },1000)
    }
}
const person = new Person('Chaman');
person.sayHi();//Hello my name is Chaman