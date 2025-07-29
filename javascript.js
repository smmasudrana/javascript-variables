// variables
var weight = 78 ;
var age= 25;
age=26;
var height= 5.7;

console.log(age);
console.log(age+weight+height)
console.log(typeof age+weight+height)


// Stirng type
var name = "Masud Rana";
var address = "Bogura, Bangladesh";
var position = "Web developer";

console.log(name)
console.log(address)
console.log(position)
console.log(typeof position)


// Boolean type
var isRich= true;
var isPassed= true ;
var isYouLazy= false;

console.log(isRich)
console.log(isPassed)
console.log(isYouLazy)
console.log(typeof isYouLazy)


// How to write a long variables name
// var my current address ="Bogura";   //wrong case
var my_current_address ="Bogura";  //snake case
var myCurrentAddress ="Bogura";    //Camel case
var MyCurrentAddress ="Bogura";    //Pascal case


// Number type
var orangePrice=20;
var lemonPrice=10;
var applePrice= parseInt('50');  //when number inside the qoutation its count string and when you add before "perseInt" it will be number
var applePrice= parseFloat('50.5');  //for vag


console.log(orangePrice)
console.log(lemonPrice)
console.log(typeof applePrice)
console.log(orangePrice+lemonPrice+applePrice)


var first = 0.1;   //for gun
var second= 0.2;
var total =(first+second)

console.log(total.toFixed(5))  //with "tofixed" you can indicate Numer of digit after the decimals point.

var num =50/0;  //infinity
var num = -50/0; //-infinity

console.log(num)


// shorthand type
var price =20;
price=price+10;  //shorthand type 1 for plus
price+=10;       //shorthand type 2 for plus
console.log(price)

var orange = 200;
orange= orange-50; //type 1 for minus
orange-= 10;       //type 2 for minus
console.log(orange)

var lemon =50;
lemon=lemon*10;  //type 1 for multiplication
lemon*=2;
console.log(lemon)

var potato =40;
potato= potato/2;
potato/=2;
console.log(potato)


// task 1
var totalMoney =1000;
var applePrice =300;
var orangePrice=400;
var totalPrice=applePrice+orangePrice;
console.log(totalPrice)

var returnMoney = totalMoney-totalPrice;
console.log(returnMoney)


// task 2
var mathmatics =75.25;
var biology =65;
var chemistry =80;
var physics = 50;
var bangla =75;
var totalMarks = mathmatics+biology+chemistry+physics+bangla
console.log(totalMarks)

var averageMarks= totalMarks/5;
console.log(averageMarks .toFixed(2))


// task 3
var num1 =119;
var num2 =5;
var reminder = num1%num2;
console.log(reminder)





