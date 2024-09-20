$(document).ready(function () {
    $(".owl-carousel-1").owlCarousel({
        loop: true,
        margin: 10,
        items: 2,
        lazyLoad:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 2,
                loop: false,
            },
        },
    });
});
$(document).ready(function () {
    $(".owl-carousel-2").owlCarousel({
        loop: true,
        margin: 10,
        lazyLoad:true,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,

                loop: false,
            },
        },
    });
});

window.addEventListener('load', function () {
    const loader = document.getElementById('page-loader');

    loader.classList.add('fade-out');


    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeMenuBtn = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('.nav-link');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
    menu.classList.add('-translate-x-full');
});

document.addEventListener('DOMContentLoaded', () => {
    const plusButton = document.querySelector('.plus');
    const minusButton = document.querySelector('.minus');
    const content = document.querySelector('.content');

    plusButton.addEventListener('click', () => {
        plusButton.classList.add('hidden');
        minusButton.classList.remove('hidden');
        content.classList.remove('max-h-0');
        content.classList.add('max-h-96');
    });

    minusButton.addEventListener('click', () => {
        plusButton.classList.remove('hidden');
        minusButton.classList.add('hidden');
        content.classList.remove('max-h-96');
        content.classList.add('max-h-0');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {

        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');

        if (window.innerWidth < 768) {
            menu.classList.add('-translate-x-full');
        }
    });
});

const menuItems = document.querySelectorAll('.selection-menu ul li');

menuItems.forEach(item => {
    item.addEventListener('click', function () {

        menuItems.forEach(el => el.classList.remove('selected'));
        this.classList.add('selected');
    });
});