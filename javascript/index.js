
const inputDado = document.querySelector("#inputDado")
const inputVeces = document.querySelector("#inputVeces")
const buttonStart = document.querySelector("#buttonStart")
const buttonClear = document.querySelector("#clearInput")
const buttonHistorial = document.querySelector("#buttonHistorial")



//FUNCIONES
function lanzarDado(tipo){
    return Math.floor(Math.random() * tipo) + 1;
};

const resultado = [];
function lanzarDadoVeces(veces, tipo){    
        resultado.length = 0;
        Array.from({length: veces}).forEach(() => {
            resultado.push(lanzarDado(tipo));
        })      
        return resultado.sort((a, b) => a - b)
        
}


function guardarResultado(resultado) {
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push(resultado);
    localStorage.setItem('historial', JSON.stringify(historial));
}

function obtenerResultado() {
    return JSON.parse(localStorage.getItem('historial')) || [];
  }

//INPUT DADO

let tipo = ""
inputDado.addEventListener("input", (event) => {
    console.log(event.target.value)
    tipo = event.target.value
})

//INPUT VECES A TIRAR

let veces = ""


inputVeces.addEventListener("input", (event) => {
    console.log(event.target.value)
    veces = event.target.value
})








        

 
    
    
