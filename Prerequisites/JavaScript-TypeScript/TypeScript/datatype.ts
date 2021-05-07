/**
 * Data Types
 * 
 * The term data type is derived from 'Data Structure'
 * In memory to store data we need a schema [structure] for data
 * Data structure defines the size of value and type of value.
 * Data type determines the type and size of value that can stored in memory.
 * JavaScript is implicitly type. The data type will be determined accordint to value assigned.
 * The data type is not a strongly type in javascript.
 * After initializing a specific type of value into memory you can store any contradictory value.
    function f1(){
                var x = 10;
                x = "Chaman"; //valid
                x = true; //valid
                x = 4; //valid
                document.write(`x is ${typeof x} type`);
            }
            f1();
 TypeScript is strongly typed. Once data type is defined it will not allow any contradictory data
 Syntax:
 let variableName: DataType;
 */
let x: number;
// x = "Chaman"; //invalid
// x = true; //invalid
x = 4; //valid

// The latest version of ts support 'type inference'
// type inference identifies the data type of value you initialized into variable and configures the data type
let price = 0;
price = 55;
let str = '';
str = 55; //invalid
