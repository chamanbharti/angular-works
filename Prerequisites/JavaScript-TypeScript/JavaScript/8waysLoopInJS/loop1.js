/*
JavaScript as a language gives you many different ways of accomplishing the same task. Iterating or looping through an array is an example of something where you have many different ways to accomplish same task.
For this example let’s create an array with five elements in it using an array literal. We will also create a simple function for returning the results to a console.

*/
const arr = ['First',2,3.3,'Foo','Bar'];
const prn = item => console.log(item);

/**
 1. Conditional for statement
The original way of looping through an array in JavaScript is using the traditional ‘for’ loop statement which takes three expressions followed by the statement.

 */
console.log('Using Conditional for statement');
for(let i=0;i<arr.length;i++){
    prn(arr[i]);
}

/**
 2. For-in loop
The next way of looping through an array is the for-in loop.

 */
console.log('Using For-in loop');
for(let index in arr){
    prn(arr[index]);
}


/**
 3. For-of loop
The for-of loop is similar to the for-in loop, but it will actually return the value of each item in the array.

 */
console.log('Using For-of loop');
for(let item of arr){
    prn(item);
}

/**
 4. while loop
The while loop is similar to the original for loop in example 1, but the condition expression is passed at the end of the statement.

 */
console.log('Using while loop');
let i = 0;
// while(i != arr.length){
   while(i < arr.length){
    prn(arr[i]);
    i++;
}


/**
 5. Do-while loop
The Do-while loop is similar to the original for loop in example 1, but the condition expression is passed at the end of the statement.

 */
console.log('Using Do-while loop');
let j = 0;
do {
    prn(arr[j]);
    j++;
}while(j < arr.length);

/**
 6. ForEach loop
The ‘forEach’ method on the array prototype was added in version 5 of JavaScript. This is actually an example of a higher-order function, or a function that takes another function as a parameter. these types of parameters are sometimes referred to as a ‘callback’. The callback for the ‘forEach’ method takes a parameter of the actual item we are iterating on in the array, but also takes optional parameters for the index and the whole array.

 */
console.log('Using ForEach loop');
arr.forEach(item => prn(item));

/**
 In this sixth example we are passing in array function that prints the current item being iterated over in the array. We can also do it like the following;

 */
console.log('Using ForEach loop another approach');
arr.forEach(function(item){
    console.log(item);
});

/**
 7. Recursion
JavaScript at its heart is a functional programming language. In a lot of functional programming languages the way you loop through an array is by using recursion, or using a function that can call itself.

 */
console.log('Using recursion');
function recursion(array){
    let item = arr.shift();
    prn(item);
    if(array.length > 0){
        recursion(array);
    }
}
// recursion(arr);

/**
 In this seventh example we defined a function called ‘recursive’ that takes the array as a parameter. Inside the function we ‘shift’ or remove one item out of the array, then pass this new version of the array into this same function. We have a condition in the function that checks to make sure the array still has any items left in it to process.
If you want to preserve the original array, you can make a copy of the array by using the spread operator ‘…’ like the following example;
const arr2 = [...arr];
recursion(arr2);
 */

 /**
  8. Symbol iterator
Yet another way we can loop through our array is using a Symbol.iterator.

  */
 console.log('Using Symbol iterator');
 let it = arr[Symbol.iterator]();
 let item = it.next();
 do{
     prn(item.value);
     item = it.next();
 }while(item.done == false);
 console.log(arr);//[ 'First', 2, 3.3, 'Foo', 'Bar' ]
 /**
  In the eighth example we use this Symbol iterator to initialize an iterator object. We can then call the ‘next’ method on the iterator object. We can continue to call this iterator until it’s ‘done’ property returns false.
We are using a do-while statement to check when the ‘done’ property is false to end the execution of this iterator.

  */

/**
 8.5. Generators
Generators are similar to the iterator we used before in example eight. Because of this I am only going to call this example 8.5. Generators are defined by using an ‘*’ at the beginning of the function name. I personally do not like the way this is used because if you are coming from a ‘C’ based language this can be confused for a pointer.

 */
console.log('Using Generators');
function *myGenerator(array){
    yield *array
}
const gen = myGenerator(arr);
let item2 = gen.next();
do{
    prn(item2.value)
    item2 = gen.next();
}while(item2.done === false)
console.log(arr);//[ 'First', 2, 3.3, 'Foo', 'Bar' ]

/**
 In this last example we have defined a generator function called ‘myGenerator’. 
 Generators can either return or yield a value. 
 In this example we call the ‘myGenerator function to create a generator object. 
 The Generator object much like the iterator object has a ‘next’ method that will yield the next value in the array. 
 The generator also has a ‘done’ parameter we can use to tell if the generator has completed execution.
Here we used a do-while loop as the expression for processing the generator.

 */