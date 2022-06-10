const footer = document.querySelector("footer")

function resizeFooterContact() {
    const redes = document.querySelector(".redes")
    if (window.innerHeight < 596 && document.title == 'Encriptador Alura - Contacto'){
        footer.style.top = "80px";
        redes.style.top= "80px";
    } else if(window.innerHeight >= 596){
        footer.style.top = 0;
        redes.style.top = 0;
        
    }
}


setInterval(resizeFooterContact,100)


function resizeFooterIndex() {

    if (window.innerHeight < 596 && document.title == 'Encriptador Alura - Inicio'){
        footer.style.top= "80px";
      
    } else if (document.title == 'Encriptador Alura - Inicio'){
        footer.style.top= 0;
        
    }
}




setInterval(resizeFooterIndex,100)
