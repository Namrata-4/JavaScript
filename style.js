let marks=[56,46,84,98,24];
console.log (marks);
console.log(marks.length);
console.log(marks[3]);
marks[0]=100;
console.log(marks[0]);
let names=["namrata","pallabi","bratati","subarna"];
// for loop :-
for(let index=0;index<names.length;index++){
    console.log(names[index]);
}
// for-of loop:-
for(let el of names){
    console.log(el);
}
let cities=["delhi","tarakeshwar","pune","mumbai","gurgaon"];
for(city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}

// Question :- for a given array of marks of students [85,97,44,37,76,60],,,, find the averge of the entire class.
let mark=[85,97,44,37,76,60];
let sum=0;
for(let m of mark){
    sum=sum+(m);
}
console.log( `avg marks of the class= ${sum/mark.length}`);
// Question2:- agiven array with prices 5 itmes -[250,645,300,900,50] all itmes have an offer of 10% off on them. change the array to store the final price aftre applying offer
let prize=[250,645,300,900,50];
for(let i=0;i<prize.length;i++){
    let offer=prize[i]/10;
    prize[i]-=offer;
}
console.log(`aftre applying offer the array is ${prize}`);

// Array Methods ;-
//  push -to add to end 
// unshift - add value in 1st
//  pop- delete from end and return 
// shift - delete from 1st
//  toString- converts array to string 
// concat -- add multiple stirng and return one new
// slice= return a array of chunk 
// splice ( index,delete,add) add.delete.replace 

// qyestion - creat a array of company [microsoft,uber,"ibm","netflix"]
// a. remove 1st company
// b.remove uber and add onl
// c. add amazon at last 