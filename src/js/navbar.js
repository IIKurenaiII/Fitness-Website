document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.navbar__burger');
    var containerMenu = document.querySelector('.navbar__conteiner_menu');
    var bodyLock = document.querySelector('body');

    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active');
        containerMenu.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });

    burger.addEventListener('click', function(event) {
        if (burger.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});
