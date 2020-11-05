var invoer = "";

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

//Betaald
var BetaaldFris = 0;
var BetaaldWijn = 0;
var BetaaldBier = 0;
var BetaaldBitter6 = 0;
var BetaaldBitter18 = 0;

//Rekening tekst
var lijn_tekst = "---------------------------------------------------------------";

function bestellen(){
    //Invoer
    while(invoer != "stop"){
        invoer = prompt("Wat wilt u bestellen?").toLowerCase();

        if (invoer == "fris") {
            invoer = parseInt(prompt("Hoeveel fris wilt u bestellen?", "0"));
            AantalFris = AantalFris + invoer;

        }else if (invoer == "wijn") {
            invoer = parseInt(prompt("Hoeveel wijn wilt u bestellen?", "0"));
            AantalWijn = AantalWijn + invoer;

        }else if (invoer == "bier") {
            invoer = parseInt(prompt("Hoeveel bier wilt u bestellen?", "0"));
            AantalBier = AantalBier + invoer;

        } else if (invoer == "bitterballen"){
        
            invoer = parseInt(prompt("Wilt u een schaal van 6 of 18 bitterballen bestellen?", "0"));
            if (invoer == "6"){
                invoer = parseInt(prompt("Hoeveel schaalen van 6 bitterballen wilt u bestellen?", "0"));
                AantalBitter6 = AantalBitter6 + invoer;

            } else if (invoer == "18") {
                invoer = parseInt(prompt("Hoeveel schaalen van 18 bitterballen wilt u bestellen?", "0"));
                AantalBitter18 = AantalBitter18 + invoer;
            }

        } else if (invoer == "stop"){
            Kassabon();

        } else {
            alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
        }
        
    }
}

//Berekening totaalbedrag


//Kassabon
function Kassabon(){
    BetaaldFris = AantalFris * PriceFris;
    BetaaldWijn = AantalWijn * PriceWijn;
    BetaaldBier = AantalBier * PriceBier;
    BetaaldBitter6 = AantalBitter6 * PriceBitter6;
    BetaaldBitter18 = AantalBitter18 * PriceBitter18;

    var Totaalbedrag = BetaaldFris + BetaaldWijn + BetaaldBier + BetaaldBitter6 + BetaaldBitter18;

    document.getElementById("Rekening:").innerHTML =
    "Uw rekening:";

    document.getElementById("lijn_tekst1").innerHTML =
    lijn_tekst;
  
    if(BetaaldFris != null && BetaaldFris != 0) {
        document.getElementById("BedragFris").innerHTML =
        AantalFris + " Fris: €" + BetaaldFris;
    } else {
        document.getElementById("BedragFris").innerHTML =
        "";
    }

    if(AantalWijn != null && BetaaldWijn != 0) {
        document.getElementById("BedragWijn").innerHTML =
        AantalWijn + " Wijn: €" + BetaaldWijn;
    } else {
        document.getElementById("BedragWijn").innerHTML =
        "";
    }

    if(AantalBier != null && BetaaldBier != 0) {
        document.getElementById("BedragBier").innerHTML =
        AantalBier + " Bier: €" + BetaaldBier;
    }else {
        document.getElementById("BedragBier").innerHTML =
        "";
    }

    if(AantalBitter6 != null && BetaaldBitter6 != 0) {
        document.getElementById("BedragBitter6").innerHTML =
        AantalBitter6 + " Schaalen van 6 bitterballen: €" + BetaaldBitter6;
    } else {
        document.getElementById("BedragBitter6").innerHTML =
        "";
    }

    if(AantalBitter18 != null && BetaaldBitter18 != 0) {
        document.getElementById("BedragBitter18").innerHTML =
        AantalBitter18 + " Schaalen van 18 bitterballen: €" + BetaaldBitter18;
    } else {
        document.getElementById("BedragBitter18").innerHTML =
        "";
    }

    document.getElementById("lijn_tekst2").innerHTML =
    lijn_tekst;

    document.getElementById("Totaalbedrag").innerHTML =
    "Totaalbedrag: €" + Totaalbedrag;


}

