var invoer = null;

//Prijzen
const PriceFris = 1.25;
const PriceWijn = 1.50;
const PriceBier = 1.50;
const PriceBitter6 = 2;
const PriceBitter18 = 2.25;

//Aantal 
var AantalFris = 0;
var AantalWijn = 0;
var AantalBier = 0;
var AantalBitter6 = 0;
var AantalBitter18 = 0;


//Invoer
while(invoer != "stop"){
    invoer = prompt("Wat wilt u bestellen?").toLowerCase();

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
    if (invoer == "bitterballen")
    {
        invoer = parseInt(prompt("Wilt u een schaal van 6 of 18 bitterballen bestellen?"));
    }
    if (invoer == "6")
    {
        invoer = parseInt(prompt("Hoeveel schaalen van 6 bitterballen wilt u bestellen?"));
        AantalBitter6 = AantalBitter6 + invoer;
    }
    if (invoer == "18")
    {
        invoer = parseInt(prompt("Hoeveel schaalen van 18 bitterballen wilt u bestellen?"));
        AantalBitter18 = AantalBitter18 + invoer;
    }
}


//Totaalbedrag product
var BetaaldFris = AantalFris * PriceFris;
var BetaaldWijn = AantalWijn * PriceWijn;
var BetaaldBier = AantalBier * PriceBier;
var BetaaldBitter6 = AantalBitter6 * PriceBitter6;
var BetaaldBitter18 = AantalBitter18 * PriceBitter18;

//Bestelling weergeven
/*document.write("<br>" + AantalFris +  " Fris: €" + BetaaldFris);
document.write("<br>" + AantalWijn +  " Wijn: €" + BetaaldWijn);
document.write("<br>" + AantalBier + " Bier: €" + BetaaldBier);
document.write("<br>" + AantalBitter6 + " Schaalen van 6 bitterballen: €" + BetaaldBitter6);
document.write("<br>" + AantalBitter18 + " Schaalen van 18 bitterballen: €" + BetaaldBitter18);*/

//Berekening totaalbedrag
var Totaalbedrag = BetaaldFris + BetaaldWijn + BetaaldBier + BetaaldBitter6 + BetaaldBitter18;

/*document.write('<br> Totaalbedrag: €' + Totaalbedrag);*/

Kassabon();

//Kassabon
function Kassabon(){
document.write("<br>Uw rekening:");
document.write("<br>----------------------------------------------------------------");
if(AantalFris !=0);
    document.write("<br>" + AantalFris +  " Fris: €" + BetaaldFris);

if(AantalWijn !=0);
    document.write("<br>" + AantalWijn +  " Wijn: €" + BetaaldWijn);

if(AantalBier !=0);
    document.write("<br>" + AantalBier + " Bier: €" + BetaaldBier);

if(AantalBitter6 !=0);
    document.write("<br>" + AantalBitter6 + " Schaalen van 6 bitterballen: €" + BetaaldBitter6);

if(AantalBitter18 !=0);
    document.write("<br>" + AantalBitter18 + " Schaalen van 18 bitterballen: €" + BetaaldBitter18);

document.write("<br>----------------------------------------------------------------");
document.write('<br> Totaalbedrag: €' + Totaalbedrag);
}

