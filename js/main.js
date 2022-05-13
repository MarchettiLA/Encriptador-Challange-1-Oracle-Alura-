// Onload Actions
textarea.focus();
main.onload = main.style.opacity = "100%"
barras.onload = barras.style.transform = "rotate(0.5turn)"
logo.onload = logo.style.transform = "scale(1)"
header.onload = header.style.opacity = "1"




// Segun el contenido es el alto del texarea resultante
const autoResizeTA = () => {
    if (resultadoFinalMobile.clientHeight !== resultadoFinalMobile.scrollHeight){
        resultadoFinalMobile.style.height = resultadoFinalMobile.scrollHeight + "px"
    }
}





