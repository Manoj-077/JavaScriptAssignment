var ri1,ri2,obj,ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd,jobj,x1,x2,row,s,so,b,b1=0,d1,e1,rl1=false,rd1=false,ae;

function showData(){
    if(localStorage.length ==0){
        document.getElementById("tabm").style.visibility = "hidden";
        document.getElementById("nd").style.visibility="visible";
    }
    else{
        document.getElementById("tabm").style.visibility = "visible";
        document.getElementById("nd").style.visibility="hidden";
        for (let i=0; i < localStorage.length;i++){
            x1 = localStorage.getItem(localStorage.key(i));
            x2 = JSON.parse(x1)
            row = document.getElementById("tabm").insertRow(document.getElementById("tabm").rows.length);
            c1 = row.insertCell(0)
            c2 = row.insertCell(1)
            c3 = row.insertCell(2)
            c4 = row.insertCell(3)
            c5 = row.insertCell(4)
            c6 = row.insertCell(5)
            c7 = row.insertCell(6)
            c8 = row.insertCell(7)
            c9 = row.insertCell(8)
            c10 = row.insertCell(9)
            c11 = row.insertCell(10)
            c12 = row.insertCell(11)
            c13 = row.insertCell(12)
            c1.innerHTML = x2.reservationID;
            c2.innerHTML = x2.carName;
            c3.innerHTML = x2.carID;
            c4.innerHTML = x2.firstName;
            c5.innerHTML = x2.lastName;
            c6.innerHTML = x2.fromD;
            c7.innerHTML = x2.toD;
            c8.innerHTML = x2.departureLocation;
            c9.innerHTML = x2.childPassenger;
            c10.innerHTML = x2.returnLocation;
            c11.innerHTML = x2.returnDate;
            c12.innerHTML = "<a onclick = delet(this) href='rm.html' >delete</a>"
            c13.innerHTML = "<a onclick = edit(this) >edit</a>"
        }
    }
}
showData();

function showData1(){
            document.getElementById("tabm").style.visibility = "visible";
            document.getElementById("nd").style.visibility="hidden";
            x1 = localStorage.getItem(ri);
            x2 = JSON.parse(x1);
            row = document.getElementById("tabm").insertRow(document.getElementById("tabm").rows.length);
            c1 = row.insertCell(0)
            c2 = row.insertCell(1)
            c3 = row.insertCell(2)
            c4 = row.insertCell(3)
            c5 = row.insertCell(4)
            c6 = row.insertCell(5)
            c7 = row.insertCell(6)
            c8 = row.insertCell(7)
            c9 = row.insertCell(8)
            c10 = row.insertCell(9)
            c11 = row.insertCell(10)
            c12 = row.insertCell(11)
            c13 = row.insertCell(12)
            c1.innerHTML = x2.reservationID;
            c2.innerHTML = x2.carName;
            c3.innerHTML = x2.carID;
            c4.innerHTML = x2.firstName;
            c5.innerHTML = x2.lastName;
            c6.innerHTML = x2.fromD;
            c7.innerHTML = x2.toD;
            c8.innerHTML = x2.departureLocation;
            c9.innerHTML = x2.childPassenger;
            c10.innerHTML = x2.returnLocation;
            c11.innerHTML = x2.returnDate;
            c12.innerHTML = "<a onclick = delet(this) href='rm.html' >delete</a>";
            c13.innerHTML = "<a onclick = edit(this) >edit</a>"
}

function delet(y){
    d1 = y.parentElement.parentElement.cells[0].innerHTML;
    localStorage.removeItem(d1);
    console.log(d1);
}
function edit(e){
    e1 = e.parentElement.parentElement.cells[0].innerHTML;
    showPop();
    tp = JSON.parse(localStorage.getItem(e1));
    document.getElementById("ri").value = tp.reservationID;
    document.getElementById("cn").value = tp.carName;
    document.getElementById("ci").value = tp.carID;
    document.getElementById("fn").value = tp.firstName;
    document.getElementById("ln").value = tp.lastName;
    document.getElementById("fd").value = tp.fromD;
    document.getElementById("td").value = tp.toD;
    document.getElementById("dl").value = tp.departureLocation;
    if(tp.childPassenger=="yes"){
        document.getElementById("cp").checked = true;
    } 
    else{
        
    }
    if(typeof(tp.returnLocation)=='string'){
        document.getElementById("ir1").checked = true;
        document.getElementById("rl").value = tp.returnLocation;
        document.getElementById("rd").value = tp.returnDate;
        ret();
    }
    else{
        document.getElementById("rl").value = "";
        document.getElementById("rd").value = "";
        document.getElementById("ir2").checked = true;
    }
    document.getElementsByClassName("btn1")[0].addEventListener("click",function(){
        document.getElementsByClassName("of")[0].style.visibility = "hidden";
        document.getElementsByClassName("of")[1].style.visibility = "hidden";
    });
    
    
}
function searchD(){
    s = document.getElementById("si").value;
    for (let r = 0; r<localStorage.length;r++){
        if(s == localStorage.key(r)){
            b1 = 1;
        }
    }
    if(b1==1){
    
        so = JSON.parse(localStorage.getItem(s));
        row = document.getElementById("tabs").insertRow(1);
        c1 = row.insertCell(0)
        c2 = row.insertCell(1)
        c3 = row.insertCell(2)  
        c4 = row.insertCell(3)
        c5 = row.insertCell(4)
        c6 = row.insertCell(5)
        c7 = row.insertCell(6)
        c8 = row.insertCell(7)
        c9 = row.insertCell(8)
        c10 = row.insertCell(9)
        c11 = row.insertCell(10)
        c12 = row.insertCell(11)
        c13 = row.insertCell(12)
        c1.innerHTML = so.reservationID;
        c2.innerHTML = so.carName;
        c3.innerHTML = so.carID;
        c4.innerHTML = so.firstName;
        c5.innerHTML = so.lastName;
        c6.innerHTML = so.fromD;
        c7.innerHTML = so.toD;
        c8.innerHTML = so.departureLocation;
        c9.innerHTML = so.childPassenger;
        c10.innerHTML = so.returnLocation;
        c11.innerHTML = so.returnDate;
        c12.innerHTML = "<a onclick = delet(this) href='rm.html' >delete</a>";
        c13.innerHTML = "<a onclick = edit(this) >edit</a>"
        document.getElementById("tabm").style.visibility = "hidden";
        document.getElementById("tabs").style.visibility = "visible";

    }
    else{
        errPop("No data found in the record")
    }
    
    
}   

function showPop(){
    document.getElementById("pop").style.visibility = "visible";
    document.getElementById("nd").style.visibility="hidden"
    /*document.getElementsByClassName("ti")[0].style.visibility = "visible";
    document.getElementsByClassName("ti")[1].style.visibility = "visible";*/
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById('sc').style.marginTop = "0px";
}
function cancelPop(){
    ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd = "";
    document.getElementById("ri").value = "";
    document.getElementById("ci").value = "";
    document.getElementById("cn").value = "";
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("fd").value = "";
    document.getElementById("td").value = "";
    document.getElementById("dl").value = "";
    document.getElementById("ir1").checked = false;
    document.getElementById("ir2").checked = false;
    document.getElementById("cp").checked = false;
    document.getElementById("rl").value = "";
    document.getElementById("rd").value = "";
    document.getElementById("pop").style.visibility = "hidden";
    document.getElementById("sc").style.visibility = "hidden";
    /*document.getElementById("sc").style.visibility = "hidden";
    document.getElementsByClassName("ti")[0].style.visibility = "hidden";
    document.getElementsByClassName("ti")[1].style.visibility = "hidden";*/
    document.getElementsByClassName("of")[0].style.visibility = "hidden";
    document.getElementsByClassName("of")[1].style.visibility = "hidden";


}
function ret(){
    document.getElementsByClassName("of")[0].style.visibility="visible";
    document.getElementsByClassName("of")[1].style.visibility="visible";
    
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById('sc').style.marginTop = "45px";
}
function retd(){
    document.getElementsByClassName("of")[0].style.visibility="hidden";
    document.getElementsByClassName("of")[1].style.visibility="hidden";
    
    
    document.getElementById('sc').style.marginTop = "0px";
}

function errPop(str){
    document.getElementById("errPop").style.visibility = "visible";
    document.getElementById("erm").innerHTML = str;
}
function closeErpop(){
    document.getElementById("errPop").style.visibility = "hidden";
    if(document.getElementById("ir1").checked == true){
        ret();
    }
    else{
        document.getElementById("sc").style.visibility = "visible";
        document.getElementById('sc').style.marginTop = "45px";
        document.getElementById('sc').style.marginTop = "0px"
    }
}

function Data(reservationID,carName,carID,firstName,lastName,fromD,toD,departureLocation,childPassenger,returnLocation,returnDate){
    this.reservationID = reservationID;
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


document.getElementById('sub1').addEventListener('click',function(c){
    document.getElementsByClassName("of")[0].style.visibility="hidden";
    document.getElementsByClassName("of")[1].style.visibility="hidden";
    document.getElementById('sc').style.visibility = "hidden";
    ri = document.getElementById("ri").value;
    cn = document.getElementById("cn").value;
    ci = document.getElementById("ci").value;
    fn = document.getElementById("fn").value;
    ln = document.getElementById("ln").value; 
    fd = document.getElementById("fd").value;
    td = document.getElementById("td").value;
    dl = document.getElementById("dl").value;

    ae = ri in localStorage; 
    if(ri<1 || ri==" " || ae == true || ri.length==0){
        errPop("invalid reservation id")
        c.preventDefault();   
    }
    else if(ci<1 || ci==" " || ci.length==0){
        errPop("invalid card id")
        c.preventDefault();
    }
    else if(fn[0]==" " || fn.length==0){
        errPop("invalid first name");
        c.preventDefault();
    }
    else if(ln[0]==" " || ln.length==0){
        errPop("invalid last name");
        c.preventDefault();
    }
    else if(td<fd){
        errPop("invalid from and to date");
        c.preventDefault();
    }
    else if(document.getElementById("ir2").checked == true){
        if(rd<fd || rd>td){
            errPop("invalid return");
            c.preventDefault();
        }
    }
    else{
        getData()
    }

});

function getData(){
    const isin = ri in localStorage;   

    if(!isin){
        if(document.getElementById("ir1").checked ===true){
            rl = document.getElementById("rl").value;
            rd = document.getElementById("rd").value;
            rl1 = true;
            rd1 = true;
            if(rd < fd || rd>td ){
                errPop("invalid retrun date");
                {}

            } 
        }
        else{
            rl = false;
            rd = false;
            
        }
        
          /* if(ri<1){
                errPop("invalid reservation id")
                {}
            }
            if(ci<1){
                errPop("invalid card id")
                {}
            }
            if(cn[0]==" " ){
                errPop("invalid car name")
                {}
            }
            if(fn[0]==" " || ln[0]==" "){
                errPop("invalid first name or last name")
                {}
            }
            if(td<fd){
                errPop("invalid input date (from and to)")
                {} //for the from and to
            } */
        
        
        try{
            cp = document.querySelector('input[type="checkbox"]:checked').value;
            cp = "yes";

            }
        catch(e){
                cp = "no" ;
            }
        if(ri =="" || cn=="" || ci==""){
            errPop("cannot store data as mandatory inputs are empty")
        } 
        else{   
        obj = new Data(ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd);
        jobj = JSON.stringify(obj);
        localStorage.setItem(ri,jobj);
        }
        cancelPop();    
        showData1();
        retd();
    }    
    else{
        errPop("id already exists ,enter different id")
    }    
}

