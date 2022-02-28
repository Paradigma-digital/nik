const settingLeftMenu = (menuItems, contentItems, activeClass) => {
    // smooth transition
    // const anchors = document.querySelectorAll('a[href*="#"');
    // anchors.forEach(anchor => {
    //     anchor.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const blockID = anchor.getAttribute('href');
    //         if(anchor.getAttribute('href') !== '#') {
    //             document.querySelector(blockID).scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });

    // set active class
    const itemsMenu = document.querySelectorAll(menuItems),
          cards     = document.querySelectorAll(contentItems);
         
    
    itemsMenu.forEach(item => {
        item.classList.remove(activeClass);
    });
    itemsMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            itemsMenu.forEach(item => {
                item.classList.remove(activeClass);
            });
            item.classList.add(activeClass);
        })
    })
    // itemsMenu[0].click();

    // height setting at scroll
    // document.addEventListener('scroll', (e) => scrollToCurrent(e));

	// const scrollToCurrent = (e) => {
    //     if(document.body.clientWidth > 992) {
    //         cards.forEach(item => {
    //             if (item.getBoundingClientRect().top < 200 && item.getBoundingClientRect().top > 100 && item.getBoundingClientRect().bottom > 200) {
	// 			itemsMenu.forEach(link => {
	// 				if(`#${item.getAttribute('id')}` === `${link.getAttribute('href')}`) {
	// 					itemsMenu.forEach(item => item.classList.remove(activeClass));
	// 					link.classList.add(activeClass);
	// 				}
	// 			})
	// 		    } 
	// 	    })
    //     }

	// }




}
export default settingLeftMenu;