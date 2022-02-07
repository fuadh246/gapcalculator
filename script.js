
var submit = document.getElementById('submit');
var result = document.getElementById('result');

var add_more = document.getElementById('add_more');
var remove = document.getElementById('remove');

var class_name1 = document.getElementById('class_name1').value;
var class_name2 = document.getElementById('class_name1').value;
var class_name3 = document.getElementById('class_name1').value;
var class_name4 = document.getElementById('class_name1').value;
var class_name5 = document.getElementById('class_name1').value;

submit.onclick = function(){
    var grade1 = document.getElementById('grade1').value;
    var grade2 = document.getElementById('grade2').value;
    var grade3 = document.getElementById('grade3').value;
    var grade4 = document.getElementById('grade4').value;
    var grade5 = document.getElementById('grade5').value;
    var credit1 = document.getElementById('credit1').value;
    var credit2 = document.getElementById('credit2').value;
    var credit3 = document.getElementById('credit3').value;
    var credit4 = document.getElementById('credit4').value;
    var credit5 = document.getElementById('credit5').value;
    
    var sum = 0.0;
    if(grade1 == 'A' || grade2 == 'A' || grade3 == 'A' || grade4 == 'A' || grade5 == 'A'){
        sum += 4;
    }
    if(grade1 == 'B' || grade2 == 'B' || grade3 == 'B' || grade4 == 'B' || grade5 == 'B'){
        sum += 3;
    }
    if(grade1 == 'C' || grade2 == 'C' || grade3 == 'C' || grade4 == 'C' || grade5 == 'C'){
        sum += 2;
    }
    if(grade1 == 'D' || grade2 == 'D' || grade3 == 'D' || grade4 == 'D' || grade5 == 'D'){
        sum += 1;
    }

    alert(sum);
}