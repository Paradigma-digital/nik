import Swiper from 'swiper/swiper-bundle.esm.js';

const initSlider = (selector, prev, next, slidesPerView, slidesPerColumn = 1, pagination = null) => {

    if(pagination) {
        const swiper = new Swiper( selector, {
            loop: true,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            slidesPerView: slidesPerView,
            slidesPerColumn,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    } else {
        const swiper = new Swiper( selector, {
            loop: true,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            slidesPerView,
            slidesPerColumn,
        });
    }
    
}

export default initSlider;