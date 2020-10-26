var antwoord;

antwoord=prompt('Welke bestelling wilt u toevoegen? Keuze uit fris, wijn of bier');

if(antwoord=="fris"){
    document.write("Keuze: Fris");
    antwoord=prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
}

else{
    document.write("Keuze: Wijn");
    antwoord=prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
}