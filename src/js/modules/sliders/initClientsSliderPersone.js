import Swiper from 'swiper/swiper-bundle.esm.js';
const initClientsSliderPersone = () => {
    const swiper = new Swiper( '.work_slider__wrapper', {
        loop: true,
        navigation: {
            nextEl: '.work_slider_next',
            prevEl: '.work_slider_prev',
        },
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {

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

export default initClientsSliderPersone;