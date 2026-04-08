class RailWayForm{
    constructor(name,trainNo){
        console.log("constructor is called" + name +" " + trainNo)
        this.name=name
        this.trainNo=trainNo
    }
    submit(){
        alert(this.name +": your form is submitted" +this.trainNo)
    }
    cancle(){
        alert(this.name+ ": your form is canclled"+ this.trainNo)
    }
}
let namrata=new RailWayForm("namrata",6757758)
let rabi= new RailWayForm("Ravi",678879)
namrata.submit()
rabi.submit()
namrata.cancle()