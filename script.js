
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
    var grade1_value;

    var sumofcredit = (Number(credit1)+Number(credit2)+Number(credit3)+Number(credit4)+Number(credit5));
    if(grade1 == 'A' ){
        grade1_value = 4;
    }else if(grade1 == 'B' ){
        grade1_value = 3;
    }else if(grade1 == 'C' ){
        grade1_value = 2;
    }else if(grade1 == 'D' ){
        grade1_value = 1;
    }
    if(grade2 == 'A' ){
        var grade2_value= 4;
    }else if(grade2 == 'B' ){
        var grade2_value = 3;
    }else if(grade2 == 'C' ){
        var grade2_value = 2;
    }else if(grade2 == 'D' ){
        var grade2_value = 1;
    }
    if(grade3 == 'A' ){
        var grade3_value = 4;
    }else if(grade3 == 'B' ){
        var grade3_value = 3;
    }else if(grade3 == 'C' ){
        var grade3_value = 2;
    }else if(grade3 == 'D' ){
        var grade3_value = 1;
    }
    if(grade4 == 'A' ){
        var grade4_value = 4;
    }else if(grade4 == 'B' ){
        var grade4_value = 3;
    }else if(grade4 == 'C' ){
        var grade4_value = 2;
    }else if(grade4 == 'D' ){
        var grade4_value = 1;
    }
    if(grade5 == 'A' ){
        var grade5_value = 4;
    }else if(grade5 == 'B' ){
        var grade5_value = 3;
    }else if(grade5 == 'C' ){
        var grade5_value = 2;
    }else if(grade5 == 'D' ){
        var grade5_value = 1;
    }

    if(grade1 == '' || credit1 == null){
       var sumofgrade1 = 0;
    }else{
        var sumofgrade1 =+ Number(grade1_value*credit1);
    }
    if(grade2 == '' || credit2 == null){
        var sumofgrade2 =0;
    }else{
        var sumofgrade2 = Number(grade2_value*credit2);
    }
    if(grade3 == '' || credit3 == null){
        var sumofgrade3 = 0;
    }else{
        var sumofgrade3 =+ Number(grade3_value*credit3);
    }
    if(grade4 == '' || credit4 == null){
        var sumofgrade4 = 0;
    }else{
        var sumofgrade4 =+ Number(grade4_value*credit4);
    }
    if(grade5 == '' || credit5 == null){
        var sumofgrade5 = 0;
    }else{
        var sumofgrade5 =+ Number(grade5_value*credit5);
    }
    var sumofgrade = Number(sumofgrade1+sumofgrade2+sumofgrade3+sumofgrade4+sumofgrade5);

    var gpa = (sumofgrade)/sumofcredit;
    result.innerHTML = gpa;

}