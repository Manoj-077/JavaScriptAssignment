var ri1,ri2;

function showPop(){
    document.getElementById("pop").style.visibility = "visible";
}
function cancelPop(){
    document.getElementById("pop").style.visibility = "hidden";
}
function ret(){
    document.getElementsByClassName("of")[0].classList.add("ret");
    document.getElementsByClassName("of")[1].classList.add("ret");
    document.getElementById("sc").classList.remove("pushup");
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById('sc').style.marginTop = "45px";
}
function retd(){
    document.getElementsByClassName("of")[0].classList.remove("ret");
    document.getElementsByClassName("of")[1].classList.remove("ret");
    document.getElementById("sc").classList.add("pushup");
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById('sc').style.marginTop = "0px";
}
function Data(reservatioID,carName,carID,firstName,lastName,fromD,toD,departureLocation,childPassenger,isReturn){
    this.reservatioID = reservatioID;
    this.carName = carName;
    this.carID = carID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fromD = fromD;
    this.departureLocation = departureLocation;
    this.childPassenger = childPassenger;
    this.isReturn = isReturn;
}

    /**/

function getData(){
    ri = document.getElementById("ri").value;
    cn = document.getElementById("cn").value;
    ci = document.getElementById("cn").value;
    fn = document.getElementById("fn").value;
    ln = document.getElementById("ln").value; 
    fd = document.getElementById("fd").value;
    td = document.getElementById("td").value;
    try{
        if(td<fd){
            throw alert("invalid input date (from and to)") //for the from and to
        }  
    }
    catch(er){

    }
    try{
        cp = document.querySelector('input[type="checkbox"]:checked').value;
        cp = "yes"
        }
    catch(e){
            cp = "no"
        }
        


}
