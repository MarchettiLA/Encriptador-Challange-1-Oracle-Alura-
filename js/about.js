const headerAbout = document.querySelector("header")
const logoAbout = document.getElementById("logo")
const barrasAbout= document.getElementById("barras")


barrasAbout.onload = barrasAbout.style.transform = "rotate(0.5turn)"
logoAbout.onload = logoAbout.style.transform = "scale(1)"
headerAbout.onload = headerAbout.style.opacity = "1"



const autoResizeTA = () => {
    if (resultadoFinalMobile.clientHeight !== resultadoFinalMobile.scrollHeight){
        resultadoFinalMobile.style.height = resultadoFinalMobile.scrollHeight + "px"
    }
}