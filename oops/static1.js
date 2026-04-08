class animal{
    constructor(name){
        this.name=animal.capitalize(name);
    }
    walk(){
        alert("animal "+this.name+" is walking");
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}
let j=new animal("jack");
j.walk();