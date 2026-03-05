"abc".toUpperCase();
[1,2,3].push(4);

function myFunction(){
    console.log("my name is namrata");
    console.log("im learning js");
}
myFunction();

function myFunction1(msg){
    // parametrs 
    console.log(msg);
}
myFunction1("i love js");
    //  argument

// sum of two numbers 
function sum(x,y){
    console.log(x+y);
}

// arrowsum .. modern js
const arrowSum=(a,b) => {
  console.log(a+b);
};
const mulArr=(x,y)=>{
    console.log(x*y);
};
const printHe=()=> console.log("hello");

function countVowel(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}

const coutVowel=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}

let arr=["pune","delhi","mumbai"];
arr.forEach((Val,idx,arr)=>{
    console.log(Val.toUpperCase(),idx,arr);
});

let arr1=[2,3,4,5,6];
arr1.forEach((num)=>{
    console.log(num*num);
});

let arr2=[1,2,3,4,5,6,8,10];
let resArr=arr2.filter((val)=>{
    return val%2===0;
});
console.log(resArr);

let ass=[1,2,3,4,5];
const res=ass.reduce((res,curr)=>{
    return res+curr;
});
console.log(res);

let lar=[1,4,6,3,5];
const big=lar.reduce((res,cut)=>{
    return res<cut ? res : cut;
});
console.log(big);

let mark=[87,56,98,91,56,90];
const topper=mark.filter((val)=>{
    return val>90;
});
console.log(topper);

let n1=prompt("enter a number :");
let arr3=[];
for(let i=1;i<=n1;i++){
    arr3[i-1]=i;
};
console.log(arr3);
let sum2=arr3.reduce((rest,currt)=>{
    return rest+currt;
});
console.log(sum2);

let mul2=arr3.reduce((rest1,currt1)=>{
    return rest1*5
    currt1;
});
console.log(mul2);