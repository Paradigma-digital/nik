import Inputmask from '/node_modules/inputmask/dist/inputmask.es6.js';
import JustValidate from 'just-validate';

const validateForm = (tel, form, name, mess, phone, mail) => {
    const sel = document.querySelector(tel);
    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(sel);

    const validation = new JustValidate(form);


    const inputs = document.querySelectorAll(`${form} input`);

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (e.target.value === '') {
                input.nextElementSibling.style.opacity = '1';
            } else {
                input.nextElementSibling.style.opacity = '0';
            }
        })
    })

    const text = document.querySelector(`${form} textarea`);
    
    text.addEventListener('input', (e) => {
        if (e.target.value === '') {
            text.nextElementSibling.style.opacity = '1';
        } else {
            text.nextElementSibling.style.opacity = '0';
        }
    });


    validation
        .addField(name, [
            {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимум 3 символа'
            },
            {
            rule: 'required',
            errorMessage: 'Это поле обязательное для ввода',
            },
        ])
        .addField( mess, [
            {
            rule: 'minLength',
            value: 10,
            errorMessage: 'Минимум 10 символа'
            },
            {
            rule: 'required',
            errorMessage: 'Это поле обязательное для ввода',
            },
        ])
        .addField( phone, [
            {
            rule: 'required',
            errorMessage: 'Укажите телефон',
            },
            {
                validator: () => {
                    const phone = sel.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                },
                errorMessage: 'Введите корректно номер телефона',
            }
        ])
        .addField(mail, [
            {
            rule: 'required',
            errorMessage: 'Укажите E-mail',
            },
            {
            rule: 'email',
            errorMessage: 'Введите корректно E-mail',
            },
        ]);

        document.querySelector(phone).addEventListener('mouseenter', (e) => {
            document.querySelector(phone).nextElementSibling.style.opacity = '0';
        })
}

export default validateForm;