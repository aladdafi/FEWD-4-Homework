//we should start by $ 
$('#mainHeading').css('color', 'red');

$('#firstDiv').html('<p>aladda alissa</p>' + '<span> aladda alissa 34 </span>' );
//$('#firstDiv').html('<span> aladda alissa 34 </span>');

$('#secDiv').text('simple text is adedd to the div'); 

var divText= $('#secDiv').text();
console.log(divText);

divText = 'if we want to put more text we use this!';
$('#secDiv').append(divText);

$('#secDiv').css({'border': '1px solid black', 
                   'padding-top': '10px',
                    'height': '100px'} );
    console.log( $('#secDiv').css('height'));
    $('#btnInput').click(someMagic);



