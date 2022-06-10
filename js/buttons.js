//Boton encriptado

if(parseInt(completeHtml()) >= 1024){
    encButton.onclick = showResultsDesktop
} else if (parseInt(completeHtml()) < 1024 ){
    encButton.onclick = showResultsMobile
}

//Boton desencriptar

if(parseInt(completeHtml()) >= 1024){
    dencButton.onclick = showResultsDesktopDenc
} else if (parseInt(completeHtml()) < 1024 ){
    dencButton.onclick = showResultsMobileDenc

}

//Boton Copiado

    // COPIA EL RESULTADO DE LA ENCRIPTACION O DESENCRIPTACION

    function copiarResultado(){
        if(parseInt(completeHtml()) >= 1024){
     navigator.clipboard.writeText(resultado.value)
        } else {
            navigator.clipboard.writeText(resultadoFinalMobile.value)
        }   
    }

copyButttonDesktop.onclick = copiarResultado
copyButttonMobile.onclick = copiarResultado 
   