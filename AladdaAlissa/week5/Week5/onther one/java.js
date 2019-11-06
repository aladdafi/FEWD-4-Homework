document.getElementById('grayButton')

$(document).ready (function(){
    console.log('hi');
}) 


    
     
     

function grayButtonClicked()

{
    $('body').css('background-color', 'red');
    $("h1").css("color", "white");          
    $('p').css("color", "white");
     console.log('wahts up');
};

function whiteButtonClicked()

{
    $('body').css('background-color', 'white');
    $('h1').css('color', 'red');
    $('p').css('color', 'red');
    console.log('so?');
};

$('#grayButton').click(grayButtonClicked);
$('#whiteButton').click(whiteButtonClicked);
