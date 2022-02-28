const initMobTopNav = () => {
    const items = document.querySelectorAll('.page__top-nav > .clients__nav_link'),
          btnSelect = document.querySelector('.page__top-nav > .top_arrow');
    if (items.length > 0) {
        if(document.body.clientWidth <= 992) {
            items.forEach(item => {
                item.classList.remove('clients__nav_link-active');
                item.style.position = 'absolute';
                item.style.visibility = 'hidden';
            })
    
    
            btnSelect.addEventListener('click', () => {
                if(btnSelect.classList.contains('open')) {
                    btnSelect.classList.remove('open');
                    btnSelect.parentElement.style.borderColor = '';
                    items.forEach(item => {
                        if(!item.classList.contains('clients__nav_link-active')) {
                            item.style.position = 'absolute';
                            item.style.visibility = 'hidden';
                        }
                    })
                } else {
                    btnSelect.classList.add('open');
                    btnSelect.parentElement.style.borderColor = '#9A211D';
                    items.forEach(item => {
                        item.style.position = '';
                        item.style.visibility = '';
                    })
                }
            })
            items.forEach(item => {
                item.addEventListener('click', () => {
                    items.forEach(item => {
                        item.classList.remove('clients__nav_link-active');
                        item.style.transition=  "all 0s ease-in-out";
                        item.style.position = 'absolute';
                        item.style.visibility = 'hidden';
                    })
                    btnSelect.classList.remove('open');
                    btnSelect.parentElement.style.borderColor = '';
                    item.style.position = '';
                    item.style.visibility = '';
                    item.classList.add('clients__nav_link-active');
                })
            })
            
            items[0].click();
        }
    }

    
    
}

export default initMobTopNav;