import Swiper from 'swiper/swiper-bundle.esm.js';

const createSlider = selector => {
    const swiper = new Swiper( selector, {
      createElements: true,
      slideClass: 'bottom__slide',
        navigation: {
            nextEl: selector + ' .bottom__slider_next',
            prevEl: selector + ' .bottom__slider_prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        spaceBetween: 300
    });
    
}
export default createSlider;