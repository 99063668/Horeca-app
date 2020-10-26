var antwoord;

antwoord=prompt('Welke bestelling wilt u toevoegen? Keuze uit fris, wijn of bier');

if(antwoord=="fris"){
    document.write("Keuze: fris");
    document.write('<br>Aantal fris: ' + prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?'));
}

    if(antwoord=="wijn"){
    document.write("Keuze: wijn");
    document.write('<br>Aantal wijn: ' + prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?'));
    }

        if(antwoord=="bier"){
             document.write("Keuze: bier");
             document.write('<br>Aantal bier: ' + prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?'));
        }
