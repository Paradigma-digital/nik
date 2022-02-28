"use strict";
import isWebp from './modules/isWebp.js';
import createSlider from './modules/createSlider.js';
import answerService from './modules/answerService.js';

import showModal from './modules/showModal.js';
import initYMap from './modules/initYMap.js';
import initYMapContacts from './modules/initYMapContacts.js';
import headerMenu from './modules/headerMenu.js';
import initVideoPlayer from './modules/initVideoPlayer.js';
import initTabs from './modules/initTabs.js';
import changeSelects from './modules/changeSelects.js';
import validateForm from './modules/validateForm.js';

import initSlider from './modules/sliders/initSlider.js';
import initTeamSlider from './modules/sliders/initTeamSlider.js';
import initClientsSlider from './modules/sliders/initClientsSlider.js';
import initThankSlider from './modules/sliders/initThankSlider.js';
import initPracticSliderPersone from './modules/sliders/initPracticSliderPersone.js';
import initClientsSliderPersone from './modules/sliders/initClientsSliderPersone.js';
import initThankSliderPersone from './modules/sliders/initThankSliderPersone.js';
import initAchievementsSliderPresone from './modules/sliders/initAchievementsSliderPresone.js';
import initPublicSliderPersone from './modules/sliders/initPublicSliderPersone.js';
import initReviewSlider from './modules/sliders/initReviewSlider.js';



import showMenu from './modules/showMenu.js';
import settingLeftMenu from './modules/settingLeftMenu.js';
import initMobTopNav from './modules/initMobTopNav.js';
import initMobSecondNav from './modules/initMobSecondNav.js';


document.addEventListener('DOMContentLoaded', () => {
    
    isWebp();
    headerMenu();
    showMenu();


    createSlider('.bottom__slider');
    answerService();

    initMobTopNav();

    initMobSecondNav('.achievements-page__nav > .page__nav_item', '.achievements-page__nav > .page__nav_arrow', 'page__nav_item-active');
    initMobSecondNav('.team-page__nav > li > a', '.team-page__nav  >.page__nav_arrow', 'page__nav_item-active');
    initMobSecondNav('.persone__nav > li > a', '.persone__nav>.page__nav_arrow');
    initMobSecondNav('.practice__left-nav > .page__nav_item', '.practice__left-nav > button.page__nav_arrow', 'page__nav_item-active');

    // changeSelects('.page__nav_select');

    initSlider('.service__thank_slider', '.thank_slider_prev', '.thank_slider_next', 3)
    initSlider('.service__practice_slider', '.practice_slider_prev', '.practice_slider_next', 2)
    // initSlider('.persone__about_slider', '.practice_slider_prev', '.practice_slider_next', 2)

    initSlider('.college__photos_slider_wrapper > .swiper', '.college__photos_slider_prev', '.college__photos_slider_next', 1, true)
    
    initThankSlider();
    initTeamSlider();
    initClientsSlider();
    initPracticSliderPersone();
    initClientsSliderPersone();
    initThankSliderPersone();
    initAchievementsSliderPresone();
    initPublicSliderPersone();
    initReviewSlider();
    

    try {
        initYMap();
    }catch(e){}
    try {
        initYMapContacts();
    }catch(e){}
    
    try {
        initVideoPlayer('result__video','.play', '.result__video', 'M7lc1UVf-VE');
    }catch(e){}

    try {
        initVideoPlayer('persone__video','.play', '.result__video', 'M7lc1UVf-VE');
    }catch(e){}

    try {
        initTabs('.team__nav_item', '.team__content-tabs',  'team__nav_item-active');
    }catch(e){}

    try {
        settingLeftMenu('.team-page__nav .page__nav_item', '.team-page__card', 'page__nav_item-active');
    }catch(e){}
    // try {
    //     settingLeftMenu('.achievements .page__nav_item', '.team-page__card', 'page__nav_item-active');
    // }catch(e){}
    try {
        settingLeftMenu('.persone__nav a', '.persone__content [id]', 'active');
    }catch(e){}

    

    

    
    showModal('.btn_team', '.modal__form');
    showModal('.btn_header', '.modal__form', '.modal__form_mob');
    showModal('.thank__slide_item', '.modal__thank', false);

    validateForm('#footer__form #user_phone', '#footer__form', '.footer__user_name', '.footer__user_mess', '.footer__user_phone', '.footer__user_email');
    validateForm('.modal__user_phone', '#modal__form', '.modal__user_name', '.modal__user_mess', '.modal__user_phone', '.modal__user_email');

})


