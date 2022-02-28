import Swiper from 'swiper/swiper-bundle.esm.js';
const initThankSliderPersone = () => {
    const swiper = new Swiper( '.thank_slider__wrapper', {
        loop: true,
        navigation: {
            nextEl: '.thank_slider_next',
            prevEl: '.thank_slider_prev',
        },
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
        //     // 1280: {
        //     //     slidesPerView: 4,
        //     // },
        //     // 991: {
        //     //     slidesPerView: 3,
        //     // },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            }

        //     // when window width is >= 480px
        }
        
    });
}

export default initThankSliderPersone;