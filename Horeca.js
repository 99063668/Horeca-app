var totaalbedrag = 0;  
function Clickme1() {
    var aantal1 = parseInt(document.getElementById("aantal1").value);
    var totaal1 = 0;
    var radio1 = 1;

    if (document.getElementById("cola").checked) {
      radio1 = 1.25;
      document.getElementById("radio1")
    } else if (document.getElementById("fanta").checked) {
      radio1 = 1.25;
      document.getElementById("radio1")
    } else if (document.getElementById("sprite").checked) {
      radio1 = 1.25;
      document.getElementById("radio1")
    }

    totaal1 = radio1 * aantal1;
    document.getElementById("totaal1").value = totaal1;
    totaalbedrag += totaal1;
    document.getElementById("totaalbedrag").value = totaalbedrag;
  }

  function Clickme3() {
    var aantal3 = parseInt(document.getElementById("aantal4").value);
    var totaal3 = 0;
    var radio3 = 1;

    if (document.getElementById("rode wijn").checked) {
      radio3 = 1.50;
      document.getElementById("radio3")
    } else if (document.getElementById("witte wijn").checked) {
      radio3 = 1.50;
      document.getElementById("radio3")
    } else if (document.getElementById("rose wijn").checked) {
      radio3 = 1.25;
      document.getElementById("radio3")
    }

    totaal3 = radio3 * aantal3;
    document.getElementById("totaal3").value = totaal3;
    totaalbedrag += totaal3;
    document.getElementById("totaalbedrag").value = totaalbedrag;
  }
  
  function Clickme4() {
    var aantal4 = parseInt(document.getElementById("aantal4").value);
    var totaal4 = 0;
    var radio4 = 1;

    if (document.getElementById("blond bier").checked) {
      radio4 = 1.75;
      document.getElementById("radio4")
    } else if (document.getElementById("bok bier").checked) {
      radio4 = 1.75;
      document.getElementById("radio4")
    } else if (document.getElementById("alcoholvrij bier").checked) {
      radio4 = 1.25;
      document.getElementById("radio4")
    }

    totaal4 = radio4 * aantal4;
    document.getElementById("totaal4").value = totaal4;
    totaalbedrag += totaal4;
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
  } else if (document.getElementById("kipnuggets").checked) {
    radio2 = 1.75;
    document.getElementById("radio2")
  } else if (document.getElementById("kroket").checked) {
    radio2 = 2.50;
    document.getElementById("radio2")
  } else if (document.getElementById("kaassouffle").checked) {
    radio2 = 2.00;
    document.getElementById("radio2")

  totaal2 = radio2 * aantal2;
  document.getElementById("totaal2").value = totaal2;
  totaalbedrag += totaal2;
  document.getElementById("totaalbedrag").value = totaalbedrag;
}
}





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
