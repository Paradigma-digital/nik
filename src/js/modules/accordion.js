// Аккардеон


const accordionAd = () => {
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = document.querySelector('header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });




    let accordion = 0;
    if (window.innerWidth <= 992) {
        accordion = document.querySelectorAll('.accordion-mob, .accordion');
        console.log(1);
    }
    if (accordion) {
        accordion.forEach(item => {
            const accordionShow = item.querySelector('.accordion-show');
            accordionShow.addEventListener('click', (e)=> {
                e.preventDefault()
                accordionShow.classList.toggle('show')
                // Получение всех дочерних элементов
                let accordionChildren = Array.from(accordionShow.closest('.accordion-mob').children)
                console.log(accordionChildren);
                accordionChildren.map(i=> {
                    if( i.querySelector('.accordion-panel') ) {
                        let item = i.querySelector('.accordion-panel');
                        if (item.getAttribute('data-show') === 'false') {
                            console.log(false);
                            item.setAttribute('data-show', true)
                            item.classList.toggle('show')
                            item.style.maxHeight = item.scrollHeight + 'px'
                        } else {
                            console.log(true);
                            item.setAttribute('data-show', false)
                            item.classList.toggle('show')
                            item.style.maxHeight = 0 + 'px'
                        }
                    }
                    
                })
            })
        });
    }
    
    
}
accordionAd()
export default accordionAd;