class employee{
    login(){
        console.log(`Employee has loggedin`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leave){
        console.log(`employee has request ${leave} leaves`);
    }
}
class programmer extends employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log("one extra is granted ")
        // console.log(`employee has request ${leaves+1} one leave extra`);
    }
}
let e=new employee()
e.requestLeaves(3)
let b=new programmer()
b.requestLeaves(3)