import Choices from 'choices.js';

const changeSelects = (selector) => {
    const element = document.querySelector(selector);
    const choices = new Choices(element, {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
        placeholder: false,
        allowHTML: true
    });
}

export default changeSelects;