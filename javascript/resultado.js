buttonStart.addEventListener("click", () => {
    localStorage.clear()
    lanzarDado(tipo);
    lanzarDadoVeces(veces, tipo)
    

    const contenedorResultado = document.getElementById("contenedorResultado")    
    const nuevoContenedor = document.createElement("div")
    const nuevoTitulo = document.createElement("h2")
    nuevoTitulo.innerText = "♣ → Tu tirada de dados fue ← ♣"
    nuevoTitulo.classList.add("titulo-nuevo")
    const nuevoContenedor2 = document.createElement("div")
    const nuevoMensaje = document.createElement("p")
    nuevoMensaje.innerText = resultado
    nuevoMensaje.classList.add("resultado-bonito")

    nuevoContenedor.appendChild(nuevoTitulo)
    nuevoContenedor2.appendChild(nuevoMensaje)

    console.log(nuevoContenedor)
    console.log(nuevoContenedor2)
    contenedorResultado.appendChild(nuevoContenedor)
    contenedorResultado.appendChild(nuevoContenedor2)

    guardarResultado(resultado)

    inputDado.value = "";
    inputVeces.value = "";
});