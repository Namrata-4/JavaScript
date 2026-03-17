// problem number 1 --
function lastdigit(num1,num2){
    const rem1=num1%10;
    const rem2=num2%10;
    console.log(rem1==rem2 ? true : false);
}
lastdigit(12,24);

// problem number 2 --
function commonDigits(num3,num4){
    console.log(String(num3).length==String(num4).length? true : false);
}
commonDigits(78574,78666);

// problem number 3--
function transformNumbers (numbers){
    return numbers.map((num)=>{
        const square=num*num;
        return (num%2==0 ? square*2 : square);
    });
}
const arr=[2,4,6,8,7];
console.log(transformNumbers(arr));
