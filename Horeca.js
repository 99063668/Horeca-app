const PrijsFris = 1;
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
document.write('<br> Totaalbedrag: €' + Totaalbedrag );
