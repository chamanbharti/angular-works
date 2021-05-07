// let values = new Array();
// values[0] = 10;
// values[1] = 20;
// console.log(values);
// let values = new Array(2);
// values[0] = 10;
// values[1] = 20;
// console.log(values);
// allow only color or colour as spelling
var word = "color";
// let regExp: any = /colou?r/;
var regExp = /colou*r/;
if (word.match(regExp)) {
    console.log("Your word " + word + " is valid");
}
else {
    console.log("Your word " + word + " is invalid");
}
// let product = [10, "A", true];
// console.log(product);//[ 10, 'A', true ]
// let product:any[] = [10, "A", true];
// console.log(product);//[ 10, 'A', true ]
