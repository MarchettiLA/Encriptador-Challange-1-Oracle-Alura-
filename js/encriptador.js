const vocales = ["a","e","i","o","u"];
const keyWords = ["ai","enter","imes","ober","ufat"];

function pasarMinus(string){
    let newStr = string.toLowerCase()
    return newStr
}

function encriptador(string) {
const newArr= [];
let newKey= "";
let minusString = pasarMinus(string)
for (let i=0;i<minusString.length;i++){
    if(vocales.includes(minusString[i])){
        newKey = reemplazador(minusString[i])
        newArr.push(newKey)            
    } else {
        newArr.push(minusString[i])
    }

}

return newArr.join("")
} 

// Funcion principal de desencriptado!!

function desencriptador(string){
let minusString = pasarMinus(string)
for (let i=0; i<keyWords.length;i++){
   minusString = minusString.replaceAll(keyWords[i],vocales[i])
}
return string
}





// Funcion asistente de encriptador()

const reemplazador = char => {
for (let i=0;i<vocales.length;i++){
    if (char === vocales[i]){
        return keyWords[i]
    }
}
}
