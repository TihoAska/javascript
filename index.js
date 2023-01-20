var button = document.getElementById("firstButton");
var button2 = document.getElementById("secondButton");
var lel = document.getElementById("name");

button.addEventListener("click", funkcija);    
button2.addEventListener("click", drugaFunkcija);


function funkcija(){
    lel.innerHTML = prompt();
}

function drugaFunkcija(){
    console.log("Stisni prvi button");
}