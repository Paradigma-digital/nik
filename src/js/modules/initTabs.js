const initTabs = (trigger, content, activeClass) => {
    const btns = document.querySelectorAll(trigger),
          tabs = document.querySelectorAll(content);

    tabs.forEach(tab => {
        tab.style.visibility = 'hidden';
        tab.style.opacity = '0';
    });

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => {
                btn.classList.remove(activeClass);
            });
            tabs.forEach(tab => {
                tab.style.visibility = 'hidden';
                tab.style.opacity = '0';
            });
            btn.classList.add(activeClass);
            tabs[i].style.visibility = '';
            tabs[i].style.opacity = '1';
        });
        
    })


    btns[0].click();
}
export default initTabs;