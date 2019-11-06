console.log('hi');

var ourDiv = document.getElementById("ourDiv");

console.log(ourDiv);
console.log(ourDiv.innerText);
ourDiv.innerText +="!!!!!!!!"

var secDiv = document.getElementsByClassName('secDiv');
console.log(secDiv[0].innerText += "!!!");
/// to print one of the same class we use this way if we use 0 it mean the first one 
//هذه الطرق المستخدمة تعتبر قديمة أما الان نستخدم طريقة جديدة 
//"querySelector"

var nameOfID = document.querySelector('#ourDiv');
var NameOfclass =document.querySelector('.secDiv');
console.log("nameOfID");
console.log("nameOfclass");
//querySelectorAll ? 
// there is one more way is more shorter with sign $ 
// we can create on element by chose name 

var creatParaEl = document.createElement('p');
console.log(creatParaEl);
creatParaEl.innerText += "created By JS";
var secDiv =document.getElementsByClassName("secDiv");

var button = document.querySelector("button");
//console.log('Click');

button.addEventListener("click", function() { 
    console.log('clicked');
} );
//small later

//we have a lot click , mouseover.....

