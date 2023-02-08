

function scroll_left() {
    document.getElementById("listafilmes").scrollLeft -= 150;
    if (document.getElementById("listafilmes").scrollLeft <= 0) {
        document.getElementById("btnEsq").style.visibility = "hidden";

    }
    else {
        document.getElementById("btnEsq").style.visibility = "visible";
    }
    document.getElementById("btnDir").style.visibility = "visible"


}
function scroll_right() {
    document.getElementById("listafilmes").scrollLeft += 150;

    if (document.getElementById("listafilmes").scrollLeft >= document.documentElement.clientWidth) {
        document.getElementById("btnDir").style.visibility = "hidden";
    }
    else {
        document.getElementById("btnDir").style.visibility = "visible";
    }
    document.getElementById("btnEsq").style.visibility = "visible";

}

function fecharBanner(){
    document.getElementById("banner").style.display="none";
}

function setup(){
    const myTimeout = setTimeout(fecharBanner, 5000);
}