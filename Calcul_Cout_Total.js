const PrixPlace = 45;
const PrixAssurance = 20;

let Assurance = true;
let NombreDeplace = 0;
let CoutTotal = 0;

function CalculPrixTotal(NombreDeplace, Assurance) {



    if (Assurance) {

        CoutTotal = NombreDeplace * PrixPlace + PrixAssurance
    }

    else {

        CoutTotal = NombreDeplace * PrixPlace
    }

    console.log(CoutTotal)
}


CalculPrixTotal(4, false)




