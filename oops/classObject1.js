class RailwayForm{
    sumbit(){
        alert(this.name+": your form is submitted :"+this.tarinNo)
    }
    cancle(){
        alert(this.name+": this form is cancelled :"+this.tarinNo)
    }
    fillname(givenname,tarinNo){
        this.name=givenname
        this.tarinNo=tarinNo
    }
}
let namrata=new RailwayForm()
namrata.fillname("Namrata",75674)
let rabi=new RailwayForm()
rabi.fillname("Rabi",788378)
namrata.sumbit()
rabi.sumbit()
rabi.cancle()