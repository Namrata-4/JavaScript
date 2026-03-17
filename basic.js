//VARIABLES 
//  mainly 3 types of varibale == var,const,let.
//  let a =10;
//  let a=20;
//  you cant redeclear using let variable .
//   var a=10;
//   var a=20;
//   console.log(a);
//  var varible 
//  const a=10;
//  const a=20;
//  cant redeclear using const variable .

//1. from string to array 
const str="namrata";
console.log(str);
const arr=Array.from(str);
console.log(arr);
//2.loops(for loop)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//3.forEach loop
arr.forEach((element)=>{
    console.log(element);
})
//4.array methods 
arr.push("bera");
console.log(arr);
const b=arr.pop();
console.log(b);
console.log(arr);
//5.array sorting 
const arr2=[1,5,3,6,3,7];
console.log(arr2.sort());
//6.indexof 
const index=arr.indexOf("a");
console.log(index);
const index1=str.indexOf("x");
console.log(index);
//7.copy (two types - shallow copy-(in shallow copy there we use spread operator) and deep copy)
const arra="nishan"
arra[1]="N";
console.log(arra);
const coparr=[...arra];
console.log(coparr);
//8. rest operator 
function sum(el1,el2){
    return el1+el2;
}
console.log(sum(6,3));
function sume(...elems){
    let total=0;
    for(x of elems){
        total+=x;
    }
    return total;
}
console.log(sume(2,3,4,5));
//9.cancationation of array 
const aee=[1,2,3,4];
const aee2=[5,6,7,8,9,10];
const aee3=[...aee,...aee2];
console.log(aee3);
//10.string methods (touppar case, to lowercase,includes,length)
const str2="nAmRata";
// console.log(str2.toUpperCase);
// console.log(str2.tolowerCase);
//11.function 
function greet(user){
    console.log((`hello ${user}`));
}
greet("namrata");
//12.find first and find last 
const input=[3,6,5,4,3,7,-2,-5];
const findfirst=input.find((num)=>num>5);
const findlast=input.findLast((num)=>num>5);
console.log(findfirst,findlast);
//13.currying 
function power(b){
    return function(a){
        return a**b;
    }
}
const square=power(2);
console.log(square(2));
const cube=power(3);
console.log(cube(2));
//filter function,map function,reduce function 
//1 filter 
const positive=input.filter((num)=>num>0);
console.log(positive);
//2 map
const numa=[2,5,6,1];
const sqat=numa.map((num)=>{
    console.log(num+num);
});
//3 reduce (accumulator that stores value , then variable , and then index )
const sum2=input.reduce((total,num,index)=>{
    console.log (total+num);
},0);
console.log(sum2);


