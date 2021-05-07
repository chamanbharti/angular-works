/*
JavaScript is not a traditional Object-Oriented language like Java or C#, it is considered a Prototype based language with object-oriented features. After watching Doug’s presentation, I have come up with my own term that I will call ‘Crockford Objects’.
When I first started learning JavaScript, the way I learned for defining a new object was by using a function that returned ‘this’. You can create a new object by using the ‘new’ keyword. Here is a simple example;

*/
function Thing(name){
    this.thisName = name;
    return this;
}
const myThing = new Thing('My Thing');
console.log(myThing);

/*
You can add functions to this object by using its ‘prototype’ property. You can add properties and functions by using the prototype property.

*/
Thing.prototype.getName = function(){
    return this.name;
}
const currentName = myThing.getName();
console.log(currentName);
/*
ES2015 classes
With the current versions of JavaScript in modern browsers and Node.js, there was a ‘class’ keyword that was added to the language. This was done mainly as way to make the language more familiar to the developers who use more general purpose languages like Java and C#.
The ‘class’ keyword in Java and C# lets the developer create a template for an object. It is not the same thing as a ‘class’ in JavaScript. In the example below we can see how the ‘class’ definition looks similar to a ‘class’ in C# or Java.

*/
class ThingAgain{
    constructor(name){
        this.thingName = name;
    }

    getName(){
        return this.thingName;
    }
}
const myThing2 = new ThingAgain('My Thing2');
console.log(myThing2);

/*
Crockford Objects
The example that Crockford gave in his presentation on how to create objects is the way developers should use for creating objects. It does not require the ‘class’ keyword or the ‘prototype’ property for defining an object. It also does not require using the ‘new’ keyword for instantiating a new object.

*/
function createThing(name){
    function getName(){
        return name;
    }
    return Object.freeze({
        name,
        getName
    });
}
const myThing3 = new createThing('My Thing3');
console.log(myThing3);
/*
In the example above we have a function with an inner function. The ‘getName’ function is a closure. Closures in JavaScript have access to all of the parameters of the parent function, so we have access to the ‘name’ property. We return a new object with just the properties and functions that we want from inside that ‘createThing’ function.
We also are using the ‘Object.freeze’ function to lock in just the parameters and functions that we want in our object. This method prevents properties and functions being added to the prototype of this object after defining the function.
Summary
The Crockford way of defining and creating objects looks to be the preferable way in JavaScript. These Crockford objects are defined with a factory function. In traditional object-oriented languages factories a common pattern for instantiating new objects.
It should be noted that there is some additional overhead for creating objects this way in JavaScript, but in most cases this should not prevent you from using this pattern.
*/