// let values = new Array();
// values[0] = 10;
// values[1] = 20;
// console.log(values);

// let values = new Array(2);
// values[0] = 10;
// values[1] = 20;

// console.log(values);


// Declaring Array in ts
// let variableName:string[];
/**
 * Meta Characters:
 *  ? zero or one occurance
 *  + one or more occurance
 *  * zero or more occurance
 *  [] multiple, random, range
 */

// allow only color or colour as spelling
let word: string = "color";
// let regExp: any = /colou?r/;
let regExp: any = /colou*r/;
if(word.match(regExp)){
    console.log(`Your word ${word} is valid`);
}else{
    console.log(`Your word ${word} is invalid`);
}

/* 
-after declaring array you have to initialize memory for array.
-values can't be stored into array if  memory is not 


-initialize memory for array
 1. Meta Character "[]"
 2. Array Constructor "Array()"

*/
















// let product = [10, "A", true];
// console.log(product);//[ 10, 'A', true ]

// let product:any[] = [10, "A", true];
// console.log(product);//[ 10, 'A', true ]

