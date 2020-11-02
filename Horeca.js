/*var Fris = prompt('Hoeveel Fris?');
var Wijn = prompt('Hoeveel Wijn?');
var Bier = prompt('Hoeveel Bier?');
var Bitterballen6 = prompt('Hoeveel schaalen van 6 bitterballen?');
var Bitterballen18 = prompt('Hoeveel schaalen van 18 bitterballen?');

//Zegt hoeveel 
document.write('<br>Fris : ' + Fris);
document.write('<br>Wijn : ' + Wijn);
document.write('<br>Bier : ' + Bier);
document.write('<br>Bitterballen6 : ' + Bitterballen6);
document.write('<br>Bitterballen18 : ' + Bitterballen18 + "<br>");

//Prijs 
const PriceFris = 1.25;
const PriceWijn = 1.50;
const PriceBier = 1.50;
const Pricebitter6 = 2.0;
const Pricebitter18 = 2.25;

var BetaaldFris = Fris * PriceFris;
var BetaaldWijn = Wijn * PriceWijn;
var BetaaldBier = Bier * PriceBier;
var Betaaldbitter6 = Bitterballen6 * Pricebitter6;
var Betaaldbitter18 = Bitterballen18 * Pricebitter18;


//Berekeningen
document.write('<br>  Fris: €' + BetaaldFris);
document.write('<br>  Wijn: €' + BetaaldWijn);
document.write('<br>  Bier: €' + BetaaldBier);
document.write('<br>  schaal met 6 bitterballen: €' + Betaaldbitter6);
document.write('<br>  schaal met 18 bitterballen: €' + Betaaldbitter18 + "<br>");

//Berekening totaalbedrag
var Totaalbedrag = BetaaldFris + BetaaldWijn + BetaaldBier + Betaaldbitter6 + Betaaldbitter18;

document.write('<br> Totaalbedrag: €' + Totaalbedrag);*/












var drankje;
var hoeveelheid;
var aantal;

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
const PriceFris = 1.25;
const PriceWijn = 1.50;
const PriceBier = 1.50;

var BetaaldFris = hoeveelheid * PriceFris;
var BetaaldWijn = hoeveelheid * PriceWijn;
var BetaaldBier = hoeveelheid * PriceBier;

document.write('<br>  Fris: €' + BetaaldFris);
document.write('<br>  Wijn: €' + BetaaldWijn);
document.write('<br>  Bier: €' + BetaaldBier);

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






