document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    const nome = document.querySelector("#nome").value;
    const time = document.querySelector("#time").value;
    const gols = parseInt(document.querySelector("#gols").value);
    const assistencias = parseInt(document.querySelector("#assistencias").value);
    const foto = document.querySelector("#foto").value;

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: nome,
        time: time,
        gols: gols,
        assistencias: assistencias,
        foto: foto
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Redirecionar o usuário para a página inicial
    window.location.href = "/index.html";
});
