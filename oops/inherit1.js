class animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(this.name+ ("is eating"))
    }
    shout(){
        console.log(this.name+(" is shouting"))
    }
}
class monkey extends animal{
    run(){
        console.log(this.name+(" is running"))
    }
}
let ani=new animal("bruno")
let m=new monkey("chiku")
ani.shout()
m.eat()
m.run()