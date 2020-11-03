var invoer = null;

//Prijzen
const PriceFris = 1.25;
const PriceWijn = 1.50;
const PriceBier = 1.50;

//Aantal 1 product
var AantalFris = 0;
var AantalWijn = 0;
var AantalBier = 0;


//Invoer
while(invoer != "stop"){
    invoer = prompt("Wat wilt u bestellen? keuze uit fris, wijn, en bier.").toLowerCase();

    if (invoer == "fris")
    {
        invoer = parseInt(prompt("Hoeveel fris wilt u bestellen?"));
        AantalFris = AantalFris + invoer;
    }
    if (invoer == "wijn")
    {
        invoer = parseInt(prompt("Hoeveel wijn wilt u bestellen?"));
        AantalWijn = AantalWijn + invoer;
    }
    if (invoer == "bier")
    {
        invoer = parseInt(prompt("Hoeveel bier wilt u bestellen?"));
        AantalBier = AantalBier + invoer;
    }
}

//Totaal bedrag 1 product
var BetaaldFris = AantalFris * PriceFris;
var BetaaldWijn = AantalWijn * PriceWijn;
var BetaaldBier = AantalBier * PriceBier;

//Prijs drankjes
document.write("<br>" + AantalFris +  " Fris: €" + BetaaldFris);
document.write("<br>" + AantalWijn +  " Wijn: €" + BetaaldWijn);
document.write("<br>" + AantalBier + " Bier: €" + BetaaldBier);

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






