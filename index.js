// function mojaFunkcija(){

//     var polje = [1.2, '13', 55, 22, 1];  //skup istih tipova

//     for(var i = 0; i<polje.length; i++){
//         console.log(polje[i]);
//     }
// }

// mojaFunkcija();

// var n = prompt();

// function ispisiSveDoOvogBroja(n){
//     for(var i = 0; i<=n; i++){
//         console.log(i);
//     }
// }

// ispisiSveDoOvogBroja(n);

var osoba = { //key value parovi
    ime: "Pero",
    prezime: "Peric",
    godine: 25,
};  //skup razlicitih tipova

var osoba2 = { //key value parovi
    ime: "Ivo",
    prezime: "Ivic",
    godine: 50,
}; 

var zivotinja = { //key value parovi
    vrsta: "Pas",
    ime: "Albert",
    godine: 8,
}; 

console.log("Ime: " + osoba.ime);
console.log("Prezime: " + osoba.prezime);
console.log("Godine: " + osoba.godine);

console.log("Ime: " + osoba2.ime);
console.log("Prezime: " + osoba2.prezime);
console.log("Godine: " + osoba2.godine);

console.log("Ja sam " + zivotinja.vrsta + ", zovem se " + zivotinja.ime + " i imam " + zivotinja.godine + " godina");