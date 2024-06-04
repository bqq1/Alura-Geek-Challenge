import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(e) {
    e.preventDefault();

    const titulo = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.criaProdutos(titulo, valor, imagem);

        window.location.href = "../index.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", e => criarProduto(e));