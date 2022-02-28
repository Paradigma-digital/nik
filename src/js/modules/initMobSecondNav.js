const initMobSecondNav = (selector, btn, activeClass = 'active') => {
    const items = document.querySelectorAll(selector),
          btnSelect = document.querySelector(btn);
    if(items.length > 0) {
        if(document.body.clientWidth <= 992) {
            items.forEach(item => {
                item.classList.remove(activeClass);
                item.style.transition =  "all 0s ease-in-out";
                item.style.position = 'absolute';
                item.style.visibility = 'hidden';
            })
    
            
    
            btnSelect.addEventListener('click', () => {
                if(btnSelect.classList.contains('open')) {
                    btnSelect.classList.remove('open')
                    items.forEach(item => {
                        if(!item.classList.contains(activeClass)) {
                            item.style.position = 'absolute';
                            item.style.visibility = 'hidden';
                        }
                    })
                } else {
                    btnSelect.classList.add('open');
                    items.forEach(item => {
                        item.style.position = '';
                        item.style.visibility = '';
                    })
                }
            })

            items.forEach(item => {
                item.addEventListener('click', () => {
                    items.forEach(item => {
                        item.classList.remove(activeClass);
                        item.style.position = 'absolute';
                        item.style.visibility = 'hidden';
                    })
                    item.style.position = '';
                    item.style.visibility = '';
                    item.classList.add(activeClass);
                    btnSelect.classList.add('open');
                    btnSelect.click();
                })
            })
    
            items[0].click();
        }
    }
    
}
export default initMobSecondNav;