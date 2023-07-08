"use strict";

function mudaTela() {
    if(window.innerWidth > 768) {
        document.getElementById("logo").src = "imagens/logo-200.png";
        cabecalho.style.height = "210px";
    } else {
        document.getElementById("logo").src = "imagens/logo-100.png";
        cabecalho.style.height = "160px";
        document.getElementById("item3").innerHTML = ''
    }
}