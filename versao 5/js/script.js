//selecionar todos os cards
let cards = document.querySelectorAll(".card-destino")

//Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function (card) {

    let botaoCuriosidade = card.querySelector('.botao-curiosidade')
    let botaoFavorito = card.querySelector('.botao-favorito')
    let curiosidade = card.querySelector('.curiosidade')

    botaoCuriosidade.addEventListener("click", function () {

        if (curiosidade.hidden) {
            curiosidade.hidden = false
            botaoCuriosidade.setAttribute("aria-expanded", "true")
            botaoCuriosidade.textContent = "Ocultar curiosidade"
        }

        else {
            curiosidade.hidden = true
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent = "Ver curiosidades"
        }
    }) //Fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function () {

        //Aplicar/Remover a classe "favoritando"
        //Classe foi aplicada? true
        //Classe foi removida? false

        let favoritado = card.classList.toggle("favoritado")

        //Atualizar o estado (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)

        if (favoritado) {
            botaoFavorito.textContent = "★ Favoritado"
        }

        else { botaoFavorito.textContent = "☆ Favorito" }

        // Chama a função de atualização toda vez que clicar no botãoFavorito
        atualizarContadorFavoritos()

    });

}); // fechamento do forEach


// V2: progamação para o recurso de filtragem de destinos

// Procurar e selecionar os botões de filtro 

const botoesFiltro = document.querySelectorAll("[data-filtro]")

// Percorrer/acessar cada botão dentro do botoesFiltro

botoesFiltro.forEach(function (botaoFiltro) {

    // Descobrir/guardar qual filtro foi escolhido 

    botaoFiltro.addEventListener('click', function () {

        // acessamos e guardamos o filtro escolhido 

        const filtro = botaoFiltro.dataset.filtro

        cards.forEach(function (card) {

            // ... e guardando a categoria de cada um

            const categoria = card.dataset.categoria

            // Mostrar todos os card ou apenas os card da categoria 

            if (filtro === "Todos" || categoria === filtro) {

                //Então mostramos o card
                card.hidden = false

            } else {

                // Senão, escodemos o card
                card.hidden = true

            }



        }) // Fechamentos do forEach dos cards

        botoesFiltro.forEach(function (botaoFiltro) {

            // Verificamos se o botão atual que foi clicado é o mesmo do filtro
            if (botaoFiltro.dataset.filtro === filtro) {

                // Se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo")

                // E mudamos o estado para pressionado/ativado (true)
                botaoFiltro.setAttribute("aria-pressed", "true")

            } else

                // Senão, retiramos a classe nele
                botaoFiltro.classList.remove("filtro-ativo")

            // E mudamos o estado para não-pressionado/desativado (false)
            botaoFiltro.setAttribute("aria-pressed", "false")

        })

    }) // Fechamento event lisntener 


}) // Fechamento forEach e dos botões

// Versão 3: script para o menu responsivo

// Selecionando os elementos que serão manipulados 

// Botão do Menu
const botaoMenu = document.querySelector(".botao-menu")

// Navegação principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal")

// Detectando o acionamento do botão
botaoMenu.addEventListener("click", function () {
    // Aplicar a classe menu-aberto, o JS deve aplicar ou remover a classe "menu-aberto" 
    // Classe aplicada? true
    // Classe removida? false
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto")

    // Atualizar o estado do botão usando aria-expanded
    botaoMenu.setAttribute("aria-expanded", menuAberto)

    // Exercício!

    // Se o menu estiver aberto, mostre o botão ✖ Fechar 
    // Se o menu estiver fechado, mostre o botão ☰ Menu

    botaoMenu.setAttribute("aria-pressed", menuAberto)

    if (menuAberto) {
        botaoMenu.textContent = "✖ Fechar"
    }

    else { botaoMenu.textContent = "☰ Menu" }

})

// Versão 4: script para contagem de favoritos.

// Selecionando o elemento que apresenta a quantidade de favoritos

const quantidadeFavoritos = document.querySelector("#quantidade-favoritos")

// Função para atualização dos favoritos
function atualizarContadorFavoritos() {

    // Guardar em mémoria a contagem, começando em zero
    let quantidade = 0

    // Percorrer todos os cards, inclusive os ocultos pelo filtros
    cards.forEach(function (card) {

        // Verificar se o card possui a classe "favorito"
        if (card.classList.contains("favoritado")) {
            // Se possuir, incrementamos a variável quantidade
            // Incrementar significa adicionar 1
            quantidade++

        }

    }) // Final forEach

    // Após a contagem, atualiza o número exibido no spam HTML
    quantidadeFavoritos.textContent = quantidade

} // Final função atualizarContadorFavoritos
