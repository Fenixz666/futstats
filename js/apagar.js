function apagar(id) {
    // Obter os jogadores armazenados no localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Filtrar os jogadores para encontrar o jogador com o ID correspondente e removê-lo
    jogadores = jogadores.filter(jogador => jogador.id !== id);

    // Atualizar os jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Recarregar a página para refletir a remoção do jogador
    window.location.reload();
}
