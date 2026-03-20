// problem number 1 --
// function lastdigit(num1,num2){
//     const rem1=num1%10;
//     const rem2=num2%10;
//     console.log(rem1==rem2 ? true : false);
// }
// lastdigit(12,24);

// // problem number 2 --
// function commonDigits(num3,num4){
//     console.log(String(num3).length==String(num4).length? true : false);
// }
// commonDigits(78574,78666);
// // problem number 5--
// function transformNumbers (numbers){
//     return numbers.map((num)=>{
//         const square=num*num;
//         return (num%2==0 ? square*2 : square);
//     });
// }
// const arr=[2,4,6,8,7];
// console.log(transformNumbers(arr));


//problem number 3 , 4 , 6
// function count(discount){
//     function applyDiscount(price){
//         return price-(price*discount);
//     }
// }
// const discountPercentage=(10);
// const productPrice=(100);


// chap1-prob1
// let name="namrata";
// let num=1;
// console.log(name+num);

// //chap1-prob2
// console.log(typeof(name+num));

// //chap1-prob3
// const a={
//    name2:"nishan",
//    age:20
// }
// // a=10;
// a['lover']="namrata";
// a['name2']="me";
// console.log(a);

// //chap1-prob4
// const dict={
//     Alacrity: "Ready eagerness",
//     Benevolent: "Kind and well-meaning.",
//     Candor: "Honesty and openness"
// };
// console.log(dict);
// console.log(dict.Alacrity);

//chap2-prob5
// const prompt = require('prompt-sync')({sigint: true});
// let age=prompt("whst is your age?");
// if(age>10 && age<20){
//     console.log("your age is between 10 and 20");
// }
// else{
//     console.log("your age is  not between 10 and 20");
// }

//chap2-prob6
// const prompt = require('prompt-sync')({sigint: true});
// let age=prompt("whst is your age?");
// switch(age){
//     case '12':
//      console.log("your age is 12")
//      break
//      case '13':
//        console.log("your age is 13")
//       break
//      case '14':
//         console.log("your age is 14")
//         break
//      case '15':
//         console.log("your age is 15")
//         break
//     default:
//         console.log("enter a valid age");
// };

//chap2-prob7
// const prompt = require('prompt-sync')({sigint: true});
// let number=prompt("enter a number : ");
// number=Number.parseInt(number);
// if(number%2==0 && number%3==0){
//     console.log("the number is divisible by both 2 and 3");
// }
// else{
//     console.log("the number is not divisible by both 2 and 3");
// };

//chap2-prob8
// const prompt = require('prompt-sync')({sigint: true});
// let number=prompt("enter a number : ");
// number=Number.parseInt(number);
// if(number%2==0 || number%3==0){
//     console.log("the number is divisible ");
// }
// else{
//     console.log("the number is not divisible");
// };

//chap2-prob8
//  const prompt = require('prompt-sync')({sigint: true});
// let age=prompt("whst is your age?");
// const age1=Number.parseInt(age);
// console.log(age1>18 ? "you can drive" : "you cant drive");

//chap3-prob8
// let marks={
//     namrata:60,
//     ruhi:40,
//     ravi:89,
//     ritu:20
// }
// let keys=Object.keys(marks);
// for(let i=0;i<keys.length;i++){
//     console.log("the marks of"+keys[i]+" are "+marks[keys[i]]);
// }

////chap3-prob9
// for(let key in marks){
//     console.log("the marks of"+key+" are "+marks[key]);
// }


////chap3-prob10
// const prompt = require('prompt-sync')({sigint: true});
// let correctNumber=45;
// let i
// while(i!=correctNumber){
// i=prompt("enter a number :")
// i=Number.parseInt(i);
// }
// console.log("you have guessed the correctnumber");

////chap3-prob11
// const mean=(a,b,c,d)=>{
//     return(a+b+c+d)/4
// }
// console.log(mean(2,4,5,6));

////chap4-prob12
// let str="nam\"";
// console.log(str.length);

////chap4-prob12
// const sentence="i am learing js with code with harry";
// const word="js";
// console.log(sentence.includes(word));
// console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

////chap4-prob12
// let str="please give rs 1000";
// let amont=Number.parseInt(str.slice(15));
// console.log(amont);
// console.log(typeof(amont));

////chap4-prob12
// let friend="masum";
// friend[3]="h"; // you cant change a existing string as they are immutable in natureb
// console.log(friend);


////chap5-prob13
const prompt = require('prompt-sync')();
let arr=[1,2,3,4,67,43];
let a=prompt("enter a number");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);
