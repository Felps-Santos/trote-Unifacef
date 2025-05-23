let somaCalc = 0;

function calcular() {
    let mascote, homenagem, leite, kit, suplemento, sangue, soma, equipe;

    mascote = Number(document.getElementById("mascote").value);
    homenagem = Number(document.getElementById("homenagem").value);
    leite = Number(document.getElementById("leite").value);
    kit = Number(document.getElementById("kit").value);
    suplemento = Number(document.getElementById("suplemento").value);
    sangue = Number(document.getElementById("sangue").value);
    soma = document.getElementById("soma");
    equipe = document.getElementById("equipe").value;

    somaCalc = 0;

    if (equipe == "Laranja") {
        if (kit >= 97 && suplemento >= 49) {
            somaCalc += 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if (kit >= 78 && suplemento >= 39) {
            somaCalc += 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 && suplemento >= 25) {
            somaCalc += 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 && suplemento >= 10) {
            somaCalc += 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        } else {
            somaCalc += (19 - kit) * 30;
        }

        if (sangue >= 49) {
            somaCalc += 2500 + ((sangue - 49) * 20);
        } else {
            somaCalc += (sangue * 20);
        }
    } else if (equipe == "Preta") {
        if (kit >= 103 && suplemento >= 52) {
            somaCalc += 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);
        } else if (kit >= 82 && suplemento >= 42) {
            somaCalc += 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if (kit >= 52 && suplemento >= 26) {
            somaCalc += 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 21 && suplemento >= 10) {
            somaCalc += 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15);
        } else {
            somaCalc += (21 - kit) * 30;
        }
    } else if (equipe == "Roxa") {
        if (kit >= 102 && suplemento >= 51) {
            somaCalc += 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);
        } else if (kit >= 82 && suplemento >= 41) {
            somaCalc += 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15);
        } else if (kit >= 51 && suplemento >= 26) {
            somaCalc += 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 20 && suplemento >= 10) {
            somaCalc += 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15);
        } else {
            somaCalc += (20 - kit) * 30;
        }
    } else if (equipe == "Verde") {
        if (kit >= 88 && suplemento >= 44) {
            somaCalc += 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);
        } else if (kit >= 70 && suplemento >= 35) {
            somaCalc += 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if (kit >= 44 && suplemento >= 22) {
            somaCalc += 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15);
        } else if (kit >= 18 && suplemento >= 9) {
            somaCalc += 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15);
        } else {
            somaCalc += (18 - kit) * 30;
        }
    } else if (equipe == "Vermelha") {
        if (kit >= 93 && suplemento >= 47) {
            somaCalc += 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);
        } else if (kit >= 74 && suplemento >= 38) {
            somaCalc += 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if (kit >= 47 && suplemento >= 24) {
            somaCalc += 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if (kit >= 19 && suplemento >= 9) {
            somaCalc += 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15);
        } else {
            somaCalc += (19 - kit) * 30;
        }
    }

    soma.innerHTML = `Pontuação Total da Equipe ${equipe}: ${somaCalc}`;
}
