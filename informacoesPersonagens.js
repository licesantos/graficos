const personagens = [
    { nome: 'Todoroki', popularidade: 85 },
    { nome: 'Neji', popularidade: 75 },
    { nome: 'Seiya', popularidade: 90 },
    { nome: 'Gojo', popularidade: 95 },
    { nome: 'Rengoku', popularidade: 80 }
];

function vizualizarInformacoesPersonagens() {
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');

    const texto = personagens.map(p => 
        `O personagem <span>${p.nome}</span> tem uma popularidade de <span>${p.popularidade}</span>.`
    ).join('<br>');

    paragrafo.innerHTML = texto;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesPersonagens();
