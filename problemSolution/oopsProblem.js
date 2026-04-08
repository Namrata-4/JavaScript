//problem 1. creat a js class to creat a compex number a constructor to set the real ans the complex part and add them
class complex{
    constructor(real,imaginary){
        this.real=real;
        this.imaginary=imaginary;
        console.log(this.real +" and "+ this.imaginary);
    }
    add(num){
        this.real=this.real + num.real
        this.imaginary=this.imaginary + num.imaginary
    }
}
let a=new complex(3,4)
let b=new complex(2,6)
a.add(b)
console.log(`addition of the complex number is : ${a.real} + ${a.imaginary}i`)

//problem2. creat a class student from a class human averride a method & see the chagnes
//problem3.see if student is an instance of human using instanceof keyword
//problem4.use getter and setter to set and get the real and imaginary part of the complex number 