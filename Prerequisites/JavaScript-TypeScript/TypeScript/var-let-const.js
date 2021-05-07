/**
 * Var defines a funcaton scope for variable.
 * You can declare anywhere in a function and access from any block in the function.
 *
 * /
// function f1() {
//     var x = 10;
//     if(x == 10){
//         var y = 20;
//     }
//    // console.log("x="+x+"\n"+"y="+y);
//     console.log(`x=${x}\ny=${y}`);
// }
// f1();

// It supports declaration, rendering and initialization.
// function f1() {
//     var x; // declaration
//     x = 10; // rendering
//     if(x == 10){
//         var y = 20; // initialization
//     }
//    // console.log("x="+x+"\n"+"y="+y);
//     console.log(`x=${x}\ny=${y}`);
// }
// f1();

// shadowing

// function f1() {
//     var x = 0;
//     x = 10; // rendering
//     if(x == 10){
//        var x = 20; // shadowing
//     }
//    // console.log("x="+x+"\n"+"y="+y);
//     console.log(`x=${x}`);
// }
// f1();

// hoisting

/*
It allows hoisting
It is a technique following by compiler to identity the variables declaration befor rendering.
Var support hoisting hence there is no order for declaring and rendering.
You can first define the rendering block then folloing block
*/
function f1() {
    x = 10;
    //console.log(`x=${x}`);
    var x; // hoisting
}
f1();
/**
 * Let
 *
 * It defines block scope variable,
 * It can be accessed only withing the block where it is declared.
 * You can't acess outside block
 * It allows declaration, rendering and initialization same like var
 * It will not allow shadowing
 * You can't redeclare same name identifier in the block
 * let will not allow hoisting
 */
function f2() {
    var x; // declaration
    x = 10; // rendering
    if (x == 10) {
        var y = void 0;
        y = 20; // block scope
        // initialization
        //console.log(`x=${x}\ny=${y}`);//OK
    }
    //console.log(`x=${x}\ny=${y}`); // y not defined
}
f2();
/**
 * const
 *
 * It defines block scope variable
 * It will allow only initialization
 * It will not allow declaring and rendering
 * It will not allow shadowing
 * It will not allow hoisting
 */
function f3() {
    var x = 10;
    // x = 10;
}
/** Variable Global scope is defined by declaring variable outside the function.
 *  You can declare or initialize by using var,let & const
 * */
// console.log(' Variable Global scope');
//  var name = "TV";
//  let price = 450000.55;
//  const ID = 1;
//  function f4() {
//      console.log(` f4 - Name = ${name}\nPrice=${price}\nID=${ID}`);
//  }
//  function f5() {
//     console.log(` f5 - Name = ${name}\nPrice=${price}\nID=${ID}`);
//  }
//  f4();
//  f5();
// FAQ: Can we define any variable in a function and make it global in access?
// A. Yes Client side global scope for variable in function is defined by using "window" object;
// "window" is a browser object
var productName = "TV";
function f6() {
    document.write("Name = " + productName);
}
function f7() {
    document.write("Name = " + productName);
}
f6();
f7();
