document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.trainer__block');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        );
    }

    function handleScroll() {
        elements.forEach(function (element) {
            if (isElementInViewport(element) && element.style.opacity !== '1') {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});


// slider-bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval: 5000000000000000
    });
});