import Swiper from 'swiper/swiper-bundle.esm.js';
const initThankSlider = () => {
    const swiper = new Swiper( '.thank__slider-wrapp', {
        loop: true,
        navigation: {
            nextEl: '.thank__slider_next',
            prevEl: '.thank__slider_prev',
        },
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            1280: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 2,
            }

            // when window width is >= 480px
        }
        
    });
}

export default initThankSlider;