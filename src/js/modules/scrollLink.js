export default function scrollLink(section, block) {
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (window.innerWidth > 768) {
            document.querySelectorAll(section).forEach((el, i) => {
                if (el.offsetTop - document.querySelector(block).clientHeight <= scrollDistance) {
                    document.querySelectorAll(`${block} a`).forEach((el) => {
                        if (el.classList.contains('active')) {
                            el.classList.remove('active');
                        }
                    });
    
                    document.querySelectorAll(`${block} li`)[i].querySelector('a').classList.add('active');
                }
            });
        }
    });
}

