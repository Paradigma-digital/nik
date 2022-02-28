import Swiper from 'swiper/swiper-bundle.esm.js';
const initClientsSlider = () => {
    const swiper = new Swiper( '.clients__slider-main', {
        loop: true,
        navigation: {
            nextEl: '.clients__slider_next',
            prevEl: '.clients__slider_prev',
        },
        // slidesPerView: 2,
        pagination: {
            el: '.clients__slider-main .swiper-pagination',
        },
        breakpoints: {
            1200: {
            slidesPerView: 2,
            },
            992: {
            slidesPerView: 1,
            }
            // when window width is >= 480px
        }
        
    });
}

export default initClientsSlider;