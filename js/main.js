'use strict';

var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");
var message = document.getElementById("wiadomosc");



//alternatywnie :

//wszystkieZgody.addEventListener("change", function(){
//    console.log("kliknięto");
//});

function stanCheckboxa(){
    
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
    
}

wszystkieZgody.onchange = stanCheckboxa;

//alternatywnie : 

//wszystkieZgody.onchange = function(){
//    console.log("kliknięty");
//    console.log(this.checked);
//    if (this.checked){
//        zgodaMarketingowa2.checked = true;
//    } else {
//        zgodaMarketingowa2.checked = false;
//    }
//}

function walidujFormularz(e){
    
//    var bladWalidacjiMsg = document.createElement('p');
//    bladWalidacjiMsg.innerHTML = "Błąd";
//    inputImie.parentNode.appendChild(bladWalidacjiMsg, inputImie.nextSibling);
    
    message.innerHTML = '<ul id="wiadomosc"></ul>'
       
    if (inputImie.value.trim() == ""){
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "Wpisz imię"
        message.appendChild(msgImie);
        e.preventDefault();
        console.log('pole Imie jest puste');
    } 
    
    if (inputEmail.value.trim() == ""){
        var msgEmail = document.createElement("li");
        msgEmail.innerHTML = "Wpisz email"
        message.appendChild(msgEmail);
        e.preventDefault();
        console.log('pole Email jest puste');
    } 
    
    if (! zgodaMarketingowa1.checked){
        var msgZgoda = document.createElement("li");
        msgZgoda.innerHTML = "Zgódź się!"
        message.appendChild(msgZgoda);
        e.preventDefault();
        console.log('Obey!');
    } 
    
    
}

wyslijBtn.addEventListener('click', walidujFormularz);



