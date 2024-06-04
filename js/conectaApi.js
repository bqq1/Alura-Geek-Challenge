async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoconvertida = await conexao.json();
    return conexaoconvertida;
}

async function criaProdutos(titulo, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            valor: valor,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error ("Nao foi possivel enviar o video!");
    }

    const conexaoconvertida = await conexao.json();
    return conexaoconvertida;
}

export const conectaApi = {
    listaProdutos,
    criaProdutos
}