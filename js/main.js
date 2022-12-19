const btns = document.querySelectorAll('.btn');
const tests = document.querySelectorAll('.testimonial');

btns.forEach(e => {
    e.addEventListener('click', () => {
        tests.forEach(change => {
            change.classList.toggle('hide');
        });
    });
});