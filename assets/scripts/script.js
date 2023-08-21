document.querySelectorAll('a[href^="#skok"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('#slider-oferta').on('slide.bs.carousel', function () {
    alert("siema")
})