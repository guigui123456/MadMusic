// Dados das músicas
const dadosMusicas = [
    { titulo: "Trem das Onze", artista: "Adoniran Barbosa", album: "Trem das Onze", ano: 1964 },
    { titulo: "Só os Loucos Sabem", artista: "Charlie Brown Jr.", album: "Camisa 10 Joga Bola Até na Chuva", ano: 2009 },
    { titulo: "Céu Azul", artista: "Charlie Brown Jr.", album: "Céu Azul", ano: 2011 },
    { titulo: "A Vida É Desafio", artista: "Racionais MC's", album: "Nada Como um Dia Após o Outro Dia", ano: 2002 },
    { titulo: "Evidências", artista: "Chitãozinho & Xororó", album: "Cowboy do Asfalto", ano: 1990 }
];


// Pegando os elementos
const like = document.querySelector(".botao-like");
const dislike = document.querySelector(".botao-dislike");
const musicas = document.querySelectorAll(".lista-musicas img");
const tituloMusica = document.querySelector(".musica-info h2");
const descricaoMusica = document.querySelector(".musica-info p");
const fundoMusica = document.querySelector(".fundo-musica");


// Like
like.addEventListener("click", function () {
    like.classList.toggle("selecionado");
    dislike.classList.remove("selecionado");
});

// Deslike
dislike.addEventListener("click", function () {
    dislike.classList.toggle("selecionado");
    like.classList.remove("selecionado");
});


 // Selecionar e desmarcar músicas
let musicaSelecionada = null;


// Percorre todas as capas
musicas.forEach(function (musica, index) {

    // Detecta o clique em uma capa
    musica.addEventListener("click", function () {

        // Verifica se a música clicada já está selecionada
        if (musicaSelecionada === index) {

            // Desmarca a música
            musicaSelecionada = null;
            musica.classList.remove("selecionada");

            // Volta às informações iniciais
            tituloMusica.textContent = "Selecione uma música";
            descricaoMusica.textContent = "Escolha uma das capas abaixo";

            // Remove o fundo
            fundoMusica.style.backgroundImage = "none";

        } else {

            // Remove a seleção das outras músicas
            musicas.forEach(function (outraMusica) {
                outraMusica.classList.remove("selecionada");
            });

            // Seleciona a música clicada
            musicaSelecionada = index;
            musica.classList.add("selecionada");

            // Atualiza as informações
            tituloMusica.textContent = dadosMusicas[index].titulo;

            descricaoMusica.textContent =
                `${dadosMusicas[index].artista} - ${dadosMusicas[index].album} - ${dadosMusicas[index].ano}`;

            // Atualiza a imagem de fundo
            fundoMusica.style.backgroundImage = `url('${musica.src}')`;
        }

    });
});


// Menu celular
const menuToggle = document.getElementById("menuToggle");
const dropdownMobile = document.getElementById("dropdownMobile");

menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMobile.classList.toggle("ativo");
});

// Fecha o menu se clicar fora
document.addEventListener("click", function (e) {
    if (!dropdownMobile.contains(e.target) && !menuToggle.contains(e.target)) {
        dropdownMobile.classList.remove("ativo");
    }
});



