//var class_name = document.getElementById('class');
var grade = document.getElementById('grade');
//var credit = document.getElementById('credit');
//var submit = document.getElementById('submit');
var add_more = document.getElementById('add_more');
//var remove = document.getElementById('remove');
var input_div = document.getElementById('input_div');
//var class_name = document.getElementById('class_name');

add_more.onclick = function(){
    var newclass_name = document.createElement('label');
    input_div.appendChild(newclass_name);
    newclass_name.innerHTML='<label >Class name: </label>'

    var newclass_name = document.createElement('input');
    newclass_name.innerText='<label>Class name:</label>'
    newclass_name.setAttribute('type','text');
    newclass_name.setAttribute('class','class_name');
    newclass_name.innerHTML='<label>Class name:</label>'
    input_div.appendChild(newclass_name);

    var newclass_name = document.createElement('label');
    input_div.appendChild(newclass_name);
    newclass_name.innerHTML='<label >Grade </label>'

    var newclass_name = document.createElement('select');
    newclass_name.value='A';
    newclass_name.value='B';
    newclass_name.setAttribute('class','grade');
    input_div.appendChild(newclass_name);

    var newclass_name = document.createElement('label');
    input_div.appendChild(newclass_name);
    newclass_name.innerHTML='<label >Credit/Hours </label>'

    var newclass_name = document.createElement('input');
    newclass_name.innerHTML='<label>Class name:</label>'
    newclass_name.setAttribute('type','number');
    newclass_name.setAttribute('class','class_name');
    input_div.appendChild(newclass_name);

    var newclass_name = document.createElement('br');
    input_div.appendChild(newclass_name);
    newclass_name.innerHTML='<br>'
}
