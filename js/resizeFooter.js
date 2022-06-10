const footer = document.querySelector("footer")
const redes = document.querySelector(".redes")

function resizeFooter() {

    if (window.innerHeight < 596){
        footer.style.top= "80px";
        redes.style.top= "80px";
    } else {
        footer.style.top= 0;
        redes.style.top= 0;
    }
}

setInterval(resizeFooter,100)