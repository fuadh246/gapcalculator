var class_name = document.getElementById('class');
var grade = document.getElementById('grade');
var credit = document.getElementById('credit');
var submit = document.getElementById('submit');
var add_more = document.getElementById('add_more');
var remove = document.getElementById('remove');
var input_div = document.getElementById('input_div');
var class_name = document.getElementById('class_name');

add_more.onclick = function(){
    var newinput_div = document.createElement('div');
    newinput_div.setAttribute('class','input_div');
    document.body.appendChild(newinput_div);
}