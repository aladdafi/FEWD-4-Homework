$(document).ready(function() { 
console.log('hi');
}); 

function slowButtonClicked () 
{
    $('#slowLight').css('background-color', 'yellow');
    console.log('what!');

};

function stopButtonClicked () { 
    $('#stopLight').css('background-color', 'red');
    console.log('sorry iam not sorry');
};

function goButtonClicked() {
    $('#goLight').css('background-color', 'green');
    console.log('bye');
}; 

$('#slowButton').click(slowButtonClicked);
$('#goButton').click(goButtonClicked);
$('#stopButton').click(stopButtonClicked);


