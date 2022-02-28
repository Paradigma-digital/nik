import Swiper from 'swiper/swiper-bundle.esm.js';

const initTeamSlider = () => {
    const swiper = new Swiper( '.team__slider_wrapper', {
        loop: true,
        // navigation: {
        //     nextEl: next,
        //     prevEl: prev,
        // },
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
        },
        // breakpoints: {
        //     992: {
        //       slidesPerView: 2,
        //     },
        //     500: {
        //       slidesPerView: 2,
        //     }
        //     // when window width is >= 480px
        //   }
        
    });
    
}

export default initTeamSlider;