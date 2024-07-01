document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.faq-icon i');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.maxHeight;

            if (isOpen) {
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                // Close all open answers before opening the clicked one
                faqItems.forEach(i => {
                    const otherAnswer = i.querySelector('.faq-answer');
                    const otherIcon = i.querySelector('.faq-icon i');
                    otherAnswer.style.maxHeight = null;
                    otherAnswer.style.paddingTop = '0';
                    otherAnswer.style.paddingBottom = '0';
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                });
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingTop = '10px';
                answer.style.paddingBottom = '10px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});
