
//https://www.freecodecamp.org/news/try-catch-in-javascript/

// let num =31;//prompt("insert a number greater than 30 but less than 40")
// try {
//     if(isNaN(num))
//     throw "Not a number (☉｡☉)!"
//         else if (num>40)
//         throw "Did you even read the instructions ಠ︵ಠ, less than 40"
//         else if (num <= 30)
//         throw "Greater than 30 "
//     }catch(e){
//        // alert(e)
//        console.log(e);
//     }

// try{
//     console.log({{}})
//     }catch(e){
//         console.log(e.message)
//     }
//     console.log("This should run after the logged details")


// y=10;
// try{
//     y=x+7
//    } catch(e){
//         console.log("x is not defined")
//     }
//     console.log("No need to worry, try catch will handle this to prevent your code from breaking")

// let data='';//prompt("name")
// try{
//     if(data==="") throw new Error("data is empty")
//     else console.log(`Hi ${data} how do you do today`)
// } catch(e){
//     console.log(e)
// } finally {
//     console.log("welcome to the try catch article")
// }

// try {
//         try {
//             throw new Error('oops');
//         } catch(e){
//         console.log(e)
//         } finally {
//         console.log('finally');
//         }
// } catch (ex) {
//     console.log('outer '+ex);
//     }

// try {
//     try {
//         throw new Error('inner catch error');
//     } finally {
//         console.log('finally');
//     }
// } catch (ex) {
//         console.log(ex);
// }

// try {
//         try {
//             throw new Error('inner catch error');
//         } catch(e){ //comment this catch out
//             console.log(e)
//         } finally {
//             console.log('finally');
//         }
//             throw new Error("outer catch error")
// } catch (ex) {
//     console.log(ex);
//     }


// "use strict"
// let x=6;//parseInt(prompt("input a number less than 5"))
// try{
//         y=x-10
//         if(y>=5) throw new Error(" y is not less than 5")
//         else console.log(y)
//     }catch(e){
//         console.log(e)
// }

"use strict"
let x = 4;//parseInt(prompt("input a number less than 5"))
try{
        y=x-10
        if(y>=5) throw new Error(" y is not less than 5")
        else console.log(y)
    }catch(e){
        if(e instanceof ReferenceError){
        throw e
    }else console.log(e)
}