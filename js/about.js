const headerAbout = document.querySelector("header")
const logo = document.getElementById("logo")
const barras= document.getElementById("barras")


barras.onload = barras.style.transform = "rotate(0.5turn)"
logo.onload = logo.style.transform = "scale(1)"
headerAbout.onload = headerAbout.style.opacity = "1"



const autoResizeTA = () => {
    if (resultadoFinalMobile.clientHeight !== resultadoFinalMobile.scrollHeight){
        resultadoFinalMobile.style.height = resultadoFinalMobile.scrollHeight + "px"
    }
}