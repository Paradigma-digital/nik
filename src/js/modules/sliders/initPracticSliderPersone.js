import Swiper from 'swiper/swiper-bundle.esm.js';
const initPracticSliderPersone = () => {
    const swiper = new Swiper( '.practice_slider__wrapper', {
        loop: true,
        navigation: {
            nextEl: '.practice_slider_next',
            prevEl: '.practice_slider_prev',
        },
        // slidesPerView: 2,
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
        //     768: {
        //         slidesPerView: 2,
        //     },
            541: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            }

        //     // when window width is >= 480px
        }
        
    });
}

export default initPracticSliderPersone;