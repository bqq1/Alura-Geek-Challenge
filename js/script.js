const camposDoFormulario = document.querySelectorAll("[required]");
const spans = document.getElementsByClassName("span-required");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function setError(index) {
    camposDoFormulario[index].style.border = "3px solid #E03D3D"
    spans[index].style.display = "block"
}

function removeError(index) {
    camposDoFormulario[index].style.border = ""
    spans[index].style.display = "none"
}

function verificaCampo(campo) {
    camposDoFormulario[0].value.length < 3 ? setError(0) : removeError(0);
}
