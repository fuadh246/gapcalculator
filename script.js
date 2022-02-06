//var class_name = document.getElementById('class');
//var grade = document.getElementById('grade');
//var credit = document.getElementById('credit');
//var submit = document.getElementById('submit');
var add_more = document.getElementById('add_more');
//var remove = document.getElementById('remove');
var input_div = document.getElementById('input_div');
//var class_name = document.getElementById('class_name');

add_more.onclick = function(){
    var div = document.createElement('input_div');
    div.id='input_div';
    div.innerHTML = 'Hi there!';
    document.body.appendChild(div);
}