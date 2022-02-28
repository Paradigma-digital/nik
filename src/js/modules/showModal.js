const showModal = (trigger, modal, modalMob = false) => {
    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }    
    calcScroll();

    let scroll = calcScroll();

    const tr = document.querySelectorAll(trigger),
          m   = document.querySelector(modal),
          header = document.querySelector('.header'),
          close   = document.querySelectorAll('.modal__close');


    const mM = modalMob ?  document.querySelector(modalMob) : null;
    


    tr.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(header.classList.contains('main')) {
                header.style.paddingRight = `${scroll}px`;
            }
            if(document.body.clientWidth <= 768) {
                if(mM) {
                    mM.style.visibility = 'visible';
                    mM.style.opacity = '1';
                } else {
                    m.style.visibility = 'visible';
                    m.style.opacity = '1';
                }
                // mM.style.position = 'fixed';
                // document.querySelector('main').style.display = 'none';
                // document.querySelector('.footer').style.display = 'none';

            } else {
                m.style.visibility = 'visible';
                m.style.opacity = '1';
                document.body.style.marginRight = `${scroll}px`;
                document.body.style.overflow = 'hidden';
            }
        })
    })
    close.forEach (c => {
        c.addEventListener('click', () => {
            if(document.body.clientWidth <= 768) {
                if(mM) {
                    mM.style.visibility = '';
                    mM.style.opacity = '';
                } else {
                    m.style.visibility = 'hidden';
                    m.style.opacity = '0';
                }
                // document.querySelector('main').style.display = 'block';
                // document.querySelector('.footer').style.display = 'block';
            } else {
                m.style.visibility = 'hidden';
                m.style.opacity = '0';
                document.body.style.marginRight = `0`;
                document.body.style.overflow = '';
            }
            if(header.classList.contains('main')) {
                header.style.paddingRight = 0;
            }
        });
    })


    if(m) {
        m.querySelector('.overlay').addEventListener('click', (e) => {
            if (e.target === m.querySelector('.overlay')) {
                m.style.visibility = 'hidden';
                document.body.style.overflow = '';
                document.body.style.marginRight = 0;
                m.style.opacity = '0';
                if(header.classList.contains('main')) {
                    header.style.paddingRight = 0;
                }
                
            }
        })
    }





    

    
}

export default showModal;