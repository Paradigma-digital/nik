export default function filterAdvocats() {
    const wrapperFilter = document.querySelector('.page__nav')
    wrapperFilter.addEventListener('click', (e) => {
        const itemFilter = e.target.closest('.page__nav_item');
        const cardsFilter = document.querySelectorAll('.practice__cards .practice__card');
        const itemFilterAll = document.querySelectorAll('.page__nav_item')
        itemFilterAll.forEach(item => {
            item.classList.remove('page__nav_item-active')
        })
        if (e.target.classList.contains('page__nav_item') || itemFilter) {
            itemFilter.classList.add('page__nav_item-active')
            console.log(itemFilter)
            cardsFilter.forEach(item => {
                item.style.display = 'none'
                if (itemFilter.getAttribute('id') == item.getAttribute('data-card')) {
                    item.style.display = 'flex'
                }
            })
        }
    })
}