const headerMenu = () => {
    const header = document.querySelector('.header.main');

    if(header) {
        if(document.body.getBoundingClientRect().y < 0) {
            header.classList.add('gradient');
        }
    
        window.addEventListener('scroll', () => {
            if (document.body.getBoundingClientRect().y < 0) {
                header.classList.add('gradient');
            } else {
                header.classList.remove('gradient');
            }
        });
    }
}

export default headerMenu;