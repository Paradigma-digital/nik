import Swiper from 'swiper/swiper-bundle.esm.js';
const initPublicSliderPersone = () => {
    const swiper = new Swiper( '.publications_slider__wrapper', {
        loop: true,
        navigation: {
            nextEl: '.publications_slider_next',
            prevEl: '.publications_slider_prev',
        },
        slidesPerView: 2,
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
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }

        //     // when window width is >= 480px
        }
        
    });
}

export default initPublicSliderPersone;