import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, valor, imagem) {
    const video = document.createElement("li");
    video.className = "imagem-produtos"
    video.innerHTML = `
                        <div class="imagem-produtos">
                            <img src="${imagem}" alt="${imagem}">
                        </div>
                        <div class="descricao-produtos">
                            <h3>${titulo}</h3>
                            <div class="valores-produtos">
                                <span class="valor-produtos">${valor}</span>
                                <a href="" class="comprar-produtos">Buy</a>
                            </div>
                        </div>
    `
    return video;
}

async function listaProdutosInseridos() {
    try {
    const listaDeProdutos = await conectaApi.listaProdutos();
    listaDeProdutos.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.valor, elemento.imagem)))
} catch {
    lista.innerHTML = `<h2>Nao foi possivel carregar a lista de video.</h2>`
}
}

listaProdutosInseridos();