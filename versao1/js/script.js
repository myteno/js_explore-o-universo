//selecionar todos os cards
let cards = document.querySelectorAll(".card-destino")
 
//Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function(card) {
 
    let botaoCuriosidade = card.querySelector ('.botao-curiosidade')
    let botaoFavorito = card.querySelector ('.botao-favorito')
    let curiosidade = card.querySelector ('.curiosidade')
 
    botaoCuriosidade.addEventListener("click", function(){
 
        if(curiosidade.hidden){
            curiosidade.hidden = false
            botaoCuriosidade.setAttribute("aria-expanded", "true")
            botaoCuriosidade.textContent = "Ocultar cuuriosidade"
        }
 
        else{
            curiosidade.hidden = true
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent = "Ver curiosidades"
        }
    }) //Fechamento do código do botaoCuriosidade
 
    botaoFavorito.addEventListener ("click", function (){
 
        //Aplicar/Remover a classe "favoritando"
        //Classe foi aplicada? true
        //Classe foi removida? false
 
        let favoritado = card.classList.toggle("favoritado")
 
        //Atualizar o estado (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado)
 
        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
 
        if(favoritado){
        botaoFavorito.textContent = "★ Favoritado"}
 
        else{botaoFavorito.textContent = "☆ Favorito"}
 
    });
 
}); // fechamento do forEach

