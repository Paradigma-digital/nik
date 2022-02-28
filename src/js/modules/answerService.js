const answerService = () => {
    const trigger = document.querySelectorAll('.service__answers_btn'),
        content = document.querySelectorAll('.service__answers_content');

    trigger.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if(btn.parentNode.classList.contains('service__answers_item-active')) {
                btn.parentNode.classList.remove('service__answers_item-active');
                content[i].style.opacity = '0';
                setTimeout(() => {
                    content[i].style.position = 'absolute';
                },300);
            } else {
                btn.parentNode.classList.add('service__answers_item-active');
                content[i].style.opacity = '1';
                content[i].style.position = 'relative';
            }
        });
    })      
}
export default answerService;