
function dificultyselection() {
   window.location.href = "./content/pages/HTML/selector.html"
}

function calculadoraopen() {
    window.location.href = "./content/pages/HTML/calculadora.html"
}

function facil() {
    window.location.href = "./facil.html"
}

function medio() {
    window.location.href = "./medio.html"
}

function dificil() {
    window.location.href = "./dificil.html"
}

function voltar() {
    window.location.href = "../../../index.html"
}

let rank = [
    {nome:"", pointEZ:"", pointMID:"", pointHARD:"", total:""},

]

function table() {
    var tabdados = document.querySelector(".tabela-dados");
    var elementos = "";
    rank.map(d => (
        elementos += `<tr>
                <td>${d.nome}</td>
                <td>${d.pointEZ}</td>
                <td>${d.pointMID}</td>
                <td>${d.pointHARD}</td>
                <td>${d.total}</td>
            </tr>`
    ))
    tabdados.innerHTML = elementos;
}

function calcular() {
    var nome = document.getElementById('nome').value;
    var pointEZ = Number(document.querySelector('.pontoeasy').value) * 0.5;
    var pointMID = Number(document.querySelector('.pontomedio').value) * 0.75;
    var pointHARD = Number(document.querySelector('.pontohard').value);
    var total = pointEZ + pointMID + pointHARD;

    var newRank = {nome, pointEZ, pointMID, pointHARD, total};
    rank.push(newRank);
    rank.sort((a, b) => b.total - a.total); 
    table();
}


