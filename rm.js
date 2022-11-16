var ri1,ri2,obj,ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd,jobj;

function showPop(){
    document.getElementById("pop").style.visibility = "visible";
    document.getElementsByClassName("ti")[0].style.visibility = "visible";
    document.getElementsByClassName("ti")[1].style.visibility = "visible";
    document.getElementById("sc").style.visibility = "visible";
}
function cancelPop(){
    ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd = "";
    document.getElementById("ri").value = "";
    document.getElementById("cn").value = "";
    document.getElementById("cn").value = "";
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("fd").value = "";
    document.getElementById("td").value = "";
    document.getElementById("dl").value = "";
    document.getElementById("pop").style.visibility = "hidden";
    document.getElementById("sc").style.visibility = "hidden";
    document.getElementsByClassName("ti")[0].style.visibility = "hidden";
    document.getElementsByClassName("ti")[1].style.visibility = "hidden";
    document.getElementById("ir1").checked = false;
    document.getElementById("ir2").checked = false;

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
function Data(reservatioID,carName,carID,firstName,lastName,fromD,toD,departureLocation,childPassenger,returnLocation,returnDate){
    this.reservatioID = reservatioID;
    this.carName = carName;
    this.carID = carID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fromD = fromD;
    this.toD = toD;
    this.departureLocation = departureLocation;
    this.childPassenger = childPassenger;
    this.returnLocation = returnLocation;
    this.returnDate = returnDate;
}

    

function getData(){
    ri = document.getElementById("ri").value;
    cn = document.getElementById("cn").value;
    ci = document.getElementById("cn").value;
    fn = document.getElementById("fn").value;
    ln = document.getElementById("ln").value; 
    fd = document.getElementById("fd").value;
    td = document.getElementById("td").value;
    dl = document.getElementById("dl").value;

    
    if(document.getElementById("ir1").checked ===true){
        rl = document.getElementById("rl").value;
        rd = document.getElementById("rd").value;
        if(rd < fd || rd>td ){
            alert("invalid retrun date")
        } 
    }
    else{
        rl = "-No data-"
        rd = "-No data-"
    }
    
        if(ri<1){
            alert("invalid reservation id")
        }
        if(ci<1){
             alert("invalid card id")
        }
        if(cn[0]==" " ){
             alert("invalid car name")
        }
        if(fn[0]==" " || ln[0]==" "){
            throw alert("invalid first name or last name")
        }
        if(td<fd){
            throw alert("invalid input date (from and to)") //for the from and to
        } 
       
    
    try{
        cp = document.querySelector('input[type="checkbox"]:checked').value;
        cp = "yes"

        }
    catch(e){
            cp = "no"
        }
    if(ri =="" || cn=="" || ci==""){
        alert("cannot store data as mandatory inputs are empty")
    } 
    else{   
    obj = new Data(ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd);
    jobj = JSON.stringify(obj);
    localStorage.setItem(ri,jobj);
    }
    cancelPop();
}
