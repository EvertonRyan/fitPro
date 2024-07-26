// Adiciona a classe 'scrolling' ao header quando a página é rolada
window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    header.classList.toggle('scrolling',window.scrollY > 0);
});

// Adiciona um evento de clique ao ícone do menu para alternar a classe "open" para abrir e fechar o menu
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    const navigationMobile = document.querySelector('.navigation-mobile');
    
    navigationMobile.classList.toggle('open');
});