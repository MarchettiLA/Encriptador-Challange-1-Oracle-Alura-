

barras.onload = barras.style.transform = "rotate(0.5turn)"
logo.onload = logo.style.transform = "scale(1)"
header.onload = header.style.opacity = "1"
const message = document.getElementById("message-input")
const form = document.querySelector("form")
const asunto = document.getElementById("subject-input");
const submit = document.getElementById("envio-form");

const resizeMessage = () => {
    if(form.clientHeight > 600){
    message.style.height = `${form.clientHeight * 0.40}px`
} else {
    message.style.height = `25%`
}
}

setInterval(resizeMessage,0)