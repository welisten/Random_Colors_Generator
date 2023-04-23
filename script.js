// adicionar <div class = conatiner__color></> ao .container via JS 

const containerEl = document.querySelector(".container")

for (let index = 0; index < 50 ; index++) {
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("container__color")
    containerEl.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelectorAll(".container__color")

//criar numeros hexadecimais aleatórios

function randomColor(){
    const char = "0123456789ABCDEF"
    const colorCodeLength = 6
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * char.length)
        colorCode += char.substring(randomNumber, randomNumber +1)
    }
    
    return  colorCode
}

//passa o num hexa aleatorio como conteudo interno e background-color(hexadecimal) para os .containe__colors de .container
function generateColors(){
   colorContainerEls.forEach((colorContainerEl) =>{
        const newColorCode = randomColor()
        colorContainerEl.style.backgroundColor = "#" + newColorCode
        colorContainerEl.innerText = "#" + newColorCode
   })
}

// init
generateColors()