function mudaSection(X) {
    var Conteudo = ["I", "II", "III"];

    for (i = 0; i < Conteudo.length; i++) {
        console.log(Conteudo[i])
        if (Conteudo[i] != X) {
            var Some = document.getElementById(Conteudo[i]);
            Some.style.display = "none";
        } else {
            var Aparece = document.getElementById(Conteudo[i]);
            Aparece.style.display = "block";
        }
    }
}

function Fecha() {
    var Side = document.getElementById("Mysidebar");
    Side.style.display = "none";

    var BotaoAbre = document.getElementById("Abre");
    BotaoAbre.style.visibility = "initial"; 
}

function Abre() {
    var Side = document.getElementById("Mysidebar");
    var Nave = document.getElementById("Nave");
    Side.style.display = "block";
    Nave.style.display = "block";
    var BotaoAbre = document.getElementById("Abre");
    BotaoAbre.style.visibility = "hidden";
}