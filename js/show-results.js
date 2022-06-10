// FUNCION QUE MUESTRA LOS RESULTADOS DE LA ENCRIPTACION O DESENCRIPTACION

function showResultsDesktop(){
    if(textarea.value == ""){
        noResultDesktop.style.display = "block";
        resultDesktop.style.display = "none"
    }
    if (textarea.value !== ""){
     noResultDesktop.style.display = "none";
     resultDesktop.style.display = "block"
    }
 resultArea = document.getElementById("result-area").innerHTML= encriptador(textarea.value);
 
 textarea.focus();
 textarea.value = "";

 main.style.transition = "width 0.3s"
 main.style.width = "60%";
 textarea.style.height = "100%"
 
 aside.style.display = "block";
 aside.style.visibility = "visible";
 aside.style.transition = "width 0.3s"
 aside.style.width = "30%"
 
 
 resultado.style.height = `95%`

for (let element of noResultItem){
 element.style.transition = "opacity 1.5s"
 element.style.opacity = "1"
}
}

function showResultsDesktopDenc(){
    if(textarea.value == "" ){
        noResultDesktop.style.display = "block"
        resultDesktop.style.display = "none"
        
    }
    if (textarea.value !== ""){
     noResultDesktop.style.display = "";
     resultDesktop.style.display = "block"
    }
 resultArea = document.getElementById("result-area").innerHTML= desencriptador(textarea.value);

 textarea.focus();
 textarea.value = ""; main.style.transition = "width 0.3s"
 
 main.style.transition = "width 0.3s"
 main.style.width = "60%";
 textarea.style.height = "100%"
 
 aside.style.display = "block";
 aside.style.visibility = "visible";
 aside.style.transition = "width 0.3s"
 aside.style.width = "30%"
 
 
 resultado.style.height = `95%`

for (let element of noResultItem){
 element.style.transition = "opacity 1.5s"
 element.style.opacity = "1"
 } 
}

// MISMA FUNCION VERSION MOBILE

//ENCRIPTADO
function showResultsMobile(){
    resultadoFinalMobile.style.height = "20px"
    if(textarea.value == ""){
        resultadoMobile.style.display= "none";
        noResult.style.display = "block"  ;           
    }
    if (textarea.value !== ""){
     noResult.style.display = "";
     resultadoMobile.style.display = "block";
    }
 resultAreaMobile = document.getElementById("result-area-mobile").innerHTML= encriptador(textarea.value);
 autoResizeTA();
 textarea.focus();
 textarea.value = ""
 window.scrollTo(0,(document.querySelector("body")).scrollHeight);

 
 
 }
 
 

 //DESENCRIPTADO
 function showResultsMobileDenc(){
 resultadoFinalMobile.style.height = "20px"
    if(textarea.value == ""){
        resultadoMobile.style.display= "none"
        noResult.style.display = "block"             
    }
    if (textarea.value !== ""){
     noResult.style.display = ""
     resultadoMobile.style.display = "block"
    }
 resultAreaMobile = document.getElementById("result-area-mobile").innerHTML= desencriptador(textarea.value);
 autoResizeTA();
 textarea.focus();
 textarea.value = "";
 window.scrollTo(0,(document.querySelector("body")).scrollHeight);
 }