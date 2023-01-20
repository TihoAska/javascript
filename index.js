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
    ispisiPodatke : function(){
        console.log("Ja sam " + zivotinja.vrsta + ", zovem se " + zivotinja.ime + " i imam " + zivotinja.godine + " godina");
    }
}; 

var zivotinja2 = { //key value parovi
    vrsta: "Macka",
    ime: "Mjaut",
    godine: 8,
}; 

var zivotinja3 = { //key value parovi
    vrsta: "Papiga",
    ime: "Pap",
    godine: 8,
}; 

// console.log("Ime: " + osoba.ime);
// console.log("Prezime: " + osoba.prezime);
// console.log("Godine: " + osoba.godine);

// console.log("Ime: " + osoba2.ime);
// console.log("Prezime: " + osoba2.prezime);
// console.log("Godine: " + osoba2.godine);

// console.log("Ja sam " + zivotinja.vrsta + ", zovem se " + zivotinja.ime + " i imam " + zivotinja.godine + " godina");

var zivotinje = [zivotinja, zivotinja2, zivotinja3];

for (var i =0; i<zivotinje.length; i++){
    console.log("Ja sam " + zivotinje[i].vrsta + ", zovem se " + zivotinje[i].ime + " i imam " + zivotinje[i].godine + " godina");
}

function ispisiIme(zivotinja){
    console.log("Ime: " + zivotinja.ime + " godine: " + zivotinja.godine);
}

ispisiIme(zivotinja);


function ispisVremena(){
    console.log(new Date().toLocaleTimeString());
}


//setTimeout(ispisVremena, 1000);
var a = setInterval(ispisVremena, 2000);
var b = setInterval(ispisVremena, 2000);

setTimeout(clearInterval(a), clearInterval(b), 10000);


console.log(new Date().toLocaleTimeString());

zivotinja.ispisiPodatke();

zivotinja.godine++;
zivotinja.ime = "Pavo";

zivotinja.ispisiPodatke();


