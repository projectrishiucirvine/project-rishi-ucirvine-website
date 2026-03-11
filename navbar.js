document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        });
    });

});

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const downArrow = document.querySelector('.scroll-indicator')
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        downArrow.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
        downArrow.classList.remove('scrolled');
    }

});
