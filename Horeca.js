var totaalbedrag = 0;  
function Clickme1() {
    var aantal1 = parseInt(document.getElementById("aantal1").value);
    var totaal1 = 0;
    var radio1 = 1;

    if (document.getElementById("fris").checked) {
      radio1 = 1.00;
      document.getElementById("radio1")
    } else if (document.getElementById("wijn").checked) {
      radio1 = 1.25;
      document.getElementById("radio1")
    } else if (document.getElementById("bier").checked) {
      radio1 = 1.75;
      document.getElementById("radio1")
    }

    totaal1 = radio1 * aantal1;
    document.getElementById("totaal1").value = totaal1;
    totaalbedrag += totaal1;
    document.getElementById("totaalbedrag").value = totaalbedrag;
  }

function Clickme2() {
  var aantal2 = parseInt(document.getElementById("aantal2").value);
  var totaal2 = 0;
  var radio2 = 1;
  
  if (document.getElementById("bitterballen").checked) {
    radio2 = 2.00;
    document.getElementById("radio2")
  } else if (document.getElementById("bitterballen18").checked) {
    radio2 = 2.25;
    document.getElementById("radio2")


  totaal2 = radio2 * aantal2;
  document.getElementById("totaal2").value = totaal2;
  totaalbedrag += totaal2;
  document.getElementById("totaalbedrag").value = totaalbedrag;
}
}

























/*function runTotal() {
    var total = 0;
    var Fris = 1.0;
    var Wijn = 1.50;
    var Bier = 1.75;
    var bitterballen6 = 2.0;
    var bitterballen18 = 2.25;
    if(document.forms[0].drankjes[0].checked == true) {
        total += Fris;
    }
    else if(document.forms[0].drankjes[1].checked == true){
        total += Wijn;
    }
    else if(document.forms[0].drankjes[2].checked == true){
        total += Bier;
    }
    else if(document.forms[0].snacks[2].checked == true){
        total += bitterballen6;
    }
    
    for(var i = 0; i < 2; i++){
        if(document.forms[0].snacks[i].checked == true){
            total += bitterballen18;
		}
    }
    document.f1.Total.value = total;
} /*










/*const PrijsFris = 1;
const PrijsWijn = 2;
const PrijsBier = 2;

var BetaaldFris = drankje * PrijsFris;
var BetaaldWijn = drankje * PrijsWijn;
var BetaaldBier = drankje * PrijsBier;

var drankje;
var hoeveelheid;

var bitterballen;
var aantal;

const Prijs6 = 3;
const Prijs18 = 4;

var Betaald6 = bitterballen * Prijs6;
var Betaald18 = bitterballen * Prijs18;

var Totaalbedrag = BetaaldFris + BetaaldWijn + BetaaldBier;


//Drankjes

while(drankje != "stop"){
    drankje = prompt("Wat wilt u bestellen? keuze uit fris, wijn, of bier.");
    if (drankje != "stop")
    {
        hoeveelheid = parseInt(prompt("Hoeveel " + drankje + " wilt u bestellen?"));
        Bestelling (drankje, hoeveelheid);
    }

}

function Bestelling(drankje, hoeveelheid){
    document.write("Bestelling: " + drankje + "<br>Aantal:" + hoeveelheid + "<br>");
}


//Prijs drankjes
document.write('<br> Prijs fris: €' + BetaaldFris);
document.write('<br> Prijs wijn: €' + BetaaldWijn);
document.write('<br> Prijs bier: €' + BetaaldBier);

document.write("<br>");
document.write("<br>");


//Bitterballen
while(bitterballen != "stop"){
    bitterballen = prompt("Wat wilt u bestellen? keuze uit bitterballen.");
    if (bitterballen != "stop")
    {
        aantal = parseInt(prompt("Wat voor schaal " + bitterballen + " wilt u bestellen? (schaal 6 of 18)"));
        aantal = parseInt(prompt("Hoeveel schaalen " + bitterballen + " wilt u bestellen?"));
        Bestelling (bitterballen, aantal);
    }

}

function Bestelling(bitterballen, aantal){
    document.write("Bestelling: " + bitterballen + "<br>Aantal:" + aantal + "<br>");
}


//Prijs bitterballen
document.write('<br> Prijs schaal van 6 bitterballen: €' + Betaald6);
document.write('<br> Prijs schaal van 18 bitterballen: €' + Betaald18);


//Berekening totaalbedrag
document.write('<br> Totaalbedrag: €' + Totaalbedrag );*/
