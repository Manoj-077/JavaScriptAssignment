var sp=0,ri1,ri2,obj,ri,cn,ci,fn,ln,fd,td,dl,cp,rl,rd,jobj,x1,x2,row,s,so,b,b1=0,d1,e1,rl1=false,rd1=false,ae;

function borderAdder(){
            c1.classList.add('tm');
            c2.classList.add('tm');
            c3.classList.add('tm');
            c4.classList.add('tm');
            c5.classList.add('tm');
            c6.classList.add('tm');
            c7.classList.add('tm');
            c8.classList.add('tm');
            c9.classList.add('tm');
            c10.classList.add('tm');
            c11.classList.add('tm');
            c12.classList.add('tm');
            c13.classList.add('tm');
            c14.classList.add('tm');
}

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
            c14 = row.insertCell(13)
            c1.innerHTML = x2.reservationID;
            c2.innerHTML = x2.carName;
            c3.innerHTML = x2.carID;
            c4.innerHTML = x2.firstName;
            c5.innerHTML = x2.lastName;
            c6.innerHTML = x2.fromD;
            c7.innerHTML = x2.toD;
            c8.innerHTML = x2.departureLocation;
            c9.innerHTML = x2.childPassenger;
            c10.innerHTML = x2.isReturn;
            c11.innerHTML = x2.returnLocation;
            c12.innerHTML = x2.returnDate;
            c13.innerHTML = "<a onclick = deletPop(this)  >delete</a>"
            c14.innerHTML = "<a onclick = edit(this) >edit</a>"
            borderAdder();
        }
    }
}
showData();


/*function showData1(){
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
            borderAdder();
}*/

function deletePopCancel(){
    document.getElementById('deletPop').style.visibility = 'hidden';
}
/*function delet(y){  
    deletPop();  
}*/

function deletPop(y){
    document.getElementById('deletPop').style.visibility = 'visible';
    document.getElementById('delok').addEventListener('click',function(){
        d1 = y.parentElement.parentElement.cells[0].innerHTML;
        localStorage.removeItem(d1);
        console.log(d1);
    })
    document.getElementById('delcancel').addEventListener('click',function(){
        deletePopCancel()
    })
}
function edit(e){
    e1 = e.parentElement.parentElement.cells[0].innerHTML;
    showPop();
    tp = JSON.parse(localStorage.getItem(e1));
    document.getElementById("ri").value = tp.reservationID;
    document.getElementById('ri').setAttribute("disabled", false);
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
        document.getElementById("cp").checked = false;
    }
    
    if(tp.returnLocation.length> 0){
        document.getElementById("ir1").checked = true
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
    
    document.getElementById('sub1').addEventListener("click",function(j){
        var edit = localStorage.getItem(e1);
        var edit1 = JSON.parse(edit);
        edit1.reservationID = document.getElementById("ri").value;
        edit1.carName = document.getElementById("cn").value;
        edit1.carID = document.getElementById("ci").value;
        edit1.firstName = document.getElementById("fn").value;
        edit1.lastName = document.getElementById("ln").value;
        edit1.fromD = document.getElementById("fd").value;
        edit1.toD = document.getElementById("td").value;
        edit1.departureLocation = document.getElementById("dl").value;
        if(ci<1 || ci==" " || ci.length==0){
            errPop("invalid car id")
            j.preventDefault();
        }
        else if(fn[0]==" " || fn.length==0){
            errPop("invalid first name");
            j.preventDefault();
        }
        else if(ln[0]==" " || ln.length==0){
            errPop("invalid last name");
            j.preventDefault();
        }
        else if(td<fd || td=="" || fd=="" ){
            errPop("invalid from and to date");
            j.preventDefault();
        }
        else if(document.getElementById("ir1").checked == true){
            edit1.isReturn = true;
            edit1.returnLocation = document.getElementById('rl').value;
            if(rd<fd || rd>td){
                errPop("invalid return");
                j.preventDefault();
            }
            else{
                edit1.returnDate = document.getElementById('rd').value;
            } 
        }
        else{
            edit1.isReturn = false;
            edit1.returnLocation = "";
            edit1.returnDate = "";
        }
        if(document.getElementById('cp').checked == true){
            edit1.childPassenger = 'yes';
        }
        else{
            edit1.childPassenger = 'no';
        }
        localStorage.setItem(e1,JSON.stringify(edit1));
        cancelPop();
        location.reload();
    })
    
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
        c14 = row.insertCell(13)
        try{
            c1.innerHTML = so.reservationID;
            c2.innerHTML = so.carName;
            c3.innerHTML = so.carID;
            c4.innerHTML = so.firstName;
            c5.innerHTML = so.lastName;
            c6.innerHTML = so.fromD;
            c7.innerHTML = so.toD;
            c8.innerHTML = so.departureLocation;
            c9.innerHTML = so.childPassenger;
            c10.innerHTML = so.isReturn;
            c11.innerHTML = so.returnLocation;
            c12.innerHTML = so.returnDate;
            c13.innerHTML = "<a onclick = deletPop(this)  >delete</a>"
            c14.innerHTML = "<a onclick = edit(this) >edit</a>"
            document.getElementById("tabm").style.visibility = "hidden";
            document.getElementById("tabs").style.visibility = "visible";
            borderAdder();
            document.getElementById("ndf").style.visibility = "hidden";
        }
        catch(jk){
            document.getElementById("tabm").style.visibility = "hidden";
            document.getElementById("sh").style.visibility = "visible";
            document.getElementById("tabs").style.visibility = "visible";
            document.getElementById("ndf").style.visibility = "visible";
            document.getElementById('ndf').style.position = "absolute";
            document.getElementById('ndf').style.top = "30px";
            document.getElementById('ndf').style.left = "0px";
            document.getElementById('ndf').style.right = "0px";
            document.getElementById('ndf').style.height = '30px';
            document.getElementById('ndf').style.borderWidth = '2px';
            document.getElementById('ndf').style.paddingTop = '5px';
            document.getElementById('ndf').style.borderStyle = "groove";
            document.getElementById('ndf').style.width = "100px";
            document.getElementById("sc").style.visibility = "hidden";
        }
        
    }
    else{
        document.getElementById("tabm").style.visibility = "hidden";
        document.getElementById("sh").style.visibility = "visible";
        document.getElementById("tabs").style.visibility = "visible";
        document.getElementById("ndf").style.visibility = "visible";
        document.getElementById('ndf').style.position = "absolute";
        //document.getElementById('ndf').style.top = "20px";
        //document.getElementById('ndf').style.left = "720px";
        document.getElementById("sc").style.visibility = "hidden";

    }
    
    
}   

function showPop(){
    document.getElementById("pop").style.visibility = "visible";
    document.getElementById("nd").style.visibility="hidden"
    /*document.getElementsByClassName("ti")[0].style.visibility = "visible";
    document.getElementsByClassName("ti")[1].style.visibility = "visible";*/
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById('sc').style.marginTop = "0px";
    sp = 1;
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
    if(sp===1){
    if(document.getElementById("ir1").checked == true ){
        ret();
        }
    else {
        document.getElementById("sc").style.visibility = "visible";
        document.getElementById('sc').style.marginTop = "0px"
        }
    }
    /*else{
        document.getElementById("sc").style.visibility = "hidden";
    }*/
}

function Data(reservationID,carName,carID,firstName,lastName,fromD,toD,departureLocation,childPassenger,isReturn,returnLocation,returnDate){
    this.reservationID = reservationID;
    this.carName = carName;
    this.carID = carID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fromD = fromD;
    this.toD = toD;
    this.departureLocation = departureLocation;
    this.childPassenger = childPassenger;
    this.isReturn = isReturn;
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
    if(ri<1 || ri==" " || ae == true || ri.length==0){     // validations
        errPop("invalid reservation id")
        c.preventDefault();   
    }
    else if(ci<1 || ci==" " || ci.length==0){
        errPop("invalid car id")
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
    else if(td<fd || td=="" || fd=="" ){
        errPop("invalid from and to date");
        c.preventDefault();
    }
    else if(document.getElementById("ir1").checked == true){
        rd = document.getElementById('rd').value;
        if(rd<fd || rd>td){
            errPop("invalid return");
            c.preventDefault();
        }
        else{
            getData()
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
            rl = "";
            rd = "";
            
        }
        
        
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
            var radio;  
        if(document.getElementById('ir1').checked==true){
            radio = true;
        }
        else if(document.getElementById('ir2').checked==true){
            radio = false;
        }
        
        obj = new Data(ri,cn,ci,fn,ln,fd,td,dl,cp,radio,rl,rd);
        if(obj.rl=='United States'){
            obj.rl = 'united States';
        }  
        jobj = JSON.stringify(obj);
        localStorage.setItem(ri,jobj);
        }
        cancelPop();    
        showData();
        retd();
    }    
    else{
        errPop("id already exists ,enter different id")
    }    
}

document.getElementById("us").value = "US(United States)";