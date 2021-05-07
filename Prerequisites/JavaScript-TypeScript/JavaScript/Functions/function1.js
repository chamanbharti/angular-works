

/**
 * Argument
 * An argument is  a value that we pass to the function when we invoke it
 * 
 * Parameter
 * A parameter is a variable that we list as part of a function definition
 */

// function greetings(name){
//     console.log('Hello '+name);
// }
// greetings('Chaman');

//Function with Arguments
// function sum(num1,num2){
//     console.log('Hello '+ ' '+name);
// }
// let name = 'Chaman';
// greetings(name);
// name = 'Bharti';
// greetings(name);

// The Arguments Object
function printAll(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
printAll(1,2,3,4,5);
printAll(10,20);
