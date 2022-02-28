document.addEventListener('DOMContentLoaded', () => {

    /* form*/ 
    const selector = document.querySelector("#tel");
    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    new JustValidate('.form', {
        rules: {
            name: {
                required: true,
                minLength: 3
            },
            tel: {
                required: true,
                function: () => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                }
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: 'Это поле обязательное для ввода',
                email: "Введите корректно E-mail"
            },
            name: {
                required: 'Это поле обязательное для ввода',
                minLength: 'Минимум 3 символа'
            },
            tel: {
                required: 'Это поле обязательное для ввода',
                tel: "Введите номер телефона корректно",
                function: "Введите номер телефона корректно"
            }
        },
    });
});
