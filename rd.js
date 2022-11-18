var nd,k1,k2,d1,obj;
function insert(rid,fd,td){
    nd = document.createElement('div');
    nd.classList.add('sd');
    document.getElementById('container').appendChild(nd);
    
}


for (let i = 0; i<localStorage.length;i++){
    insert();
    
    rid = localStorage.key(i);
    obj = JSON.parse(localStorage.getItem(rid));
    d1 = document.createElement('div');
    d1.classList.add('dc')
    k1 = document.createElement('p');
    j1 = document.createElement('p');
    l1 = document.createElement('p');
    document.getElementsByClassName('sd')[i].innerHTML = "<img src='imgs/car.jpg' class='ig'>";
    document.getElementsByClassName('sd')[i].appendChild(d1);
    k2 = document.createTextNode(rid);
    j2 = document.createTextNode(obj.fromD);
    l2 = document.createTextNode(obj.toD);
    k1.appendChild(k2);
    j1.appendChild(j2);
    l1.appendChild(l2);
    d1.appendChild(k1);
    d1.appendChild(j1);
    d1.appendChild(l1);
    
}