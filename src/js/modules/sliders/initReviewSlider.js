import Swiper from 'swiper/swiper-bundle.esm.js';

const initReviewSlider = () => {
    const swiper = new Swiper( '.review__slider_window', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.review__slider_next',
            prevEl: '.review__slider_prev',
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // }
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'fraction'
        // },
        pagination: {
            type: 'progressbar',
            el: '.review__slider_paginator',
        },
    });

    if(document.querySelector('.review__slider_counter > .current')) {
        const current = document.querySelector('.review__slider_counter > .current'),
        all = document.querySelector('.review__slider_counter > .all');
        all.innerHTML = swiper.slides.length - 2 ;

        swiper.on('slideChange', function () {
            current.innerHTML = swiper.realIndex + 1;
            
        });
    }




    
}

export default initReviewSlider;