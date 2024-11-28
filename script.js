


function create(){
    let mynote = document.getElementById('note').value;
    let mybutton = document.getElementsByClassName('btn');
    
    let mylist= document.getElementById('list');
    let listitem= document.createElement('li');

    listitem.textContent= mynote;
    mylist.appendChild(listitem);

}