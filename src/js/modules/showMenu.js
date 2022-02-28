const showMenu = () => {
    const trigger = document.querySelector('.header__humburger'),
          menu    = document.querySelector('.header__nav');

    trigger.addEventListener('click', () => {
        if (trigger.classList.contains('close')) {
            trigger.classList.remove('close');
            menu.style.opacity = '';
            menu.style.visibility = '';
            document.querySelector('.header').style.position = '';
            document.querySelector('main').style.display = '';
            document.querySelector('.footer').style.display = '';
            document.querySelector('.modal__form').style.display = '';
            document.querySelector('.modal__form_mob').style.display = '';
            document.querySelector('.modal__thank').style.display = '';
        } else {
            trigger.classList.add('close');
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            document.querySelector('.header').style.position = 'absolute';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.footer').style.display = 'none';
            document.querySelector('.modal__form').style.display = 'none';
            document.querySelector('.modal__form_mob').style.display = 'none';
            document.querySelector('.modal__thank').style.display = 'none';

        }
    })

    // 2 level
    if (document.body.clientWidth <= 992 ) {
        const links = document.querySelectorAll('.header__nav_item.list a');

        links.forEach(l => {
            l.addEventListener('click', e => {
                e.preventDefault();
                menu.querySelectorAll('.header__nav_item').forEach(i => {
                    i.style.visibility = 'hidden';
                })
                l.nextElementSibling.style.visibility = 'visible';
                l.nextElementSibling.style.opacity = '1';
                
                l.nextElementSibling.querySelector('span').addEventListener('click', (e) => {
                    l.nextElementSibling.style.visibility = '';
                    l.nextElementSibling.style.opacity = '';
                    menu.querySelectorAll('.header__nav_item').forEach(i => {
                        i.style.visibility = '';
                    })
                })
            })


        })

            
            
        
    }


}

export default showMenu;