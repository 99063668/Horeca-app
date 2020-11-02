var drankje;
var aantal;

//Drankjes
while(drankje != "stop"){
    drankje = prompt("Wat wilt u bestellen? keuze uit fris, wijn, of bier.");
    if (drankje != "stop")
    {
        aantal = parseInt(prompt("Hoeveel " + drankje + " wilt u bestellen?"));
        Bestelling (drankje, aantal);
    }
}
function Bestelling(drankje, aantal){
    document.write("Bestelling: " + aantal + " " + drankje + "<br>");
}

//Prijs drankjes
const PriceFris = 1.25;
const PriceWijn = 1.50;
const PriceBier = 1.50;

var aantalfris = aantal;
var aantalwijn = aantal;
var aantalbier = aantal;

var BetaaldFris = aantalfris * PriceFris;
var BetaaldWijn = aantalwijn * PriceWijn;
var BetaaldBier = aantalbier * PriceBier;

document.write("<br>" + aantalfris +  " Fris: €" + BetaaldFris);
document.write("<br>" + aantalwijn +  " Wijn: €" + BetaaldWijn);
document.write("<br>" + aantalbier + " Bier: €" + BetaaldBier);

//Berekening totaalbedrag
var Totaalbedrag = BetaaldFris + BetaaldWijn + BetaaldBier;

document.write('<br> Totaalbedrag: €' + Totaalbedrag);





















/*//Bitterballen
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

const Pricebitter6 = 2.0;
const Pricebitter18 = 2.25;

var Betaaldbitter6 = hoeveelheid * Pricebitter6;
var Betaaldbitter18 = hoeveelheid* Pricebitter18;

document.write('<br>  schaal met 6 bitterballen: €' + Betaaldbitter6);
document.write('<br>  schaal met 18 bitterballen: €' + Betaaldbitter18);*/






