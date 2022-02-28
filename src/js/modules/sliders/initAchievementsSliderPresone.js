import Swiper from 'swiper/swiper-bundle.esm.js';
const initAchievementsSliderPresone = () => {
    const swiper = new Swiper( '.achievements_slider__wrapper', {
        loop: true,
        navigation: {
            nextEl: '.achievements_slider_next',
            prevEl: '.achievements_slider_prev',
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
            768: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 2,
            }

        //     // when window width is >= 480px
        }
        
    });
}

export default initAchievementsSliderPresone;