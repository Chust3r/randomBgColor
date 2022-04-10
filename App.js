const $colors = document.getElementById("colors"),
$generate = document.getElementById("generate"),
$SelectColor = document.querySelectorAll("[data-color]"),
$copy = document.getElementById("copyCss")

let grados = 90


const rgbToHex = (color)=>{
    let hex = `${color.toString(16)}0`
    return hex.slice(0,2)
}

const randomColor = ()=>{

    //Generar colores en RGB

    let color1 = (Math.round(Math.random()*255)),
    color2 = (Math.round(Math.random()*255)),
    color3 = (Math.round(Math.random()*255))


    


    
    return `#${rgbToHex(color1)}${rgbToHex(color2)}${rgbToHex(color3)}`      
   

    
}   

const randomBackground = (deg = 0,...colors)=>{
        
    let [color1,color2] = colors

    $colors.style.background = `linear-gradient(${deg}deg,${color1},${color2}`
    $SelectColor[0].value = color1
    $SelectColor[1].value = color2
    
    document.getElementById("styles").textContent = `linear-gradient(${deg}deg,${color1},${color2})`
    
    
}

$generate.addEventListener("click",(e)=>{

    grados = Math.floor(Math.random()*360)
    randomBackground(grados,randomColor(),randomColor())

})

$colors.addEventListener("change",()=>{

    randomBackground(grados,$SelectColor[0].value,$SelectColor[1].value)

})

document.addEventListener("DOMContentLoaded",(e)=>{
    randomBackground(grados,randomColor(),randomColor())
})










