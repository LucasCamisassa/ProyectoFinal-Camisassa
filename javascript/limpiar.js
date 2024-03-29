buttonClear.addEventListener("click", () => {    
    inputDado.value = "";
    inputVeces.value = "";
    location.reload();
    localStorage.clear()
});
