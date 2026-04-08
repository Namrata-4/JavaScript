class animal{
    constructor(name){
        this.name=name;
    }
    fly(){
        console.log(" main ud raha hu");
    }
    get name(){
        return this._name;
    }
    set name(newName){
         this._name=newName;
    }
}
class rabbit extends animal{
    eat(){
        console.log("rabbit is eating");
    }
}
let a=new rabbit("bruno");
a.fly()
console.log(a._name)
a._name="nishan"
console.log(a._name)
let c=89
console.log(a instanceof animal)
console.log(a instanceof rabbit)
console.log(c instanceof animal)