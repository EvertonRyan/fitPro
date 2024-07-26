// Inicializando o swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Breakpoints responsivos
    breakpoints: {
        // Quando a largura da janela é >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // Quando a largura da janela é >= 425px
        425: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // Quando a largura da janela é >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        // Quando a largura da janela é >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});