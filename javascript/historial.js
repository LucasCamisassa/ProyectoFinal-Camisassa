buttonHistorial.addEventListener("click", () => {
    let historial = obtenerResultado()
    
    const resultadoAnterior = document.getElementById("contenidoHistorial")
    resultadoAnterior.innerText = historial
})