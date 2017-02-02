var botao_menu = document.querySelector('.js-botao-menu');

function menuitemclick() {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo');
}

botao_menu.onclick = function() {
     menuitemclick();
}