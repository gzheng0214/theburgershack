/*
 * @Author: Gavin
 * @Date:   2021-01-13 20:36:28
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-01-15 23:14:45
 */


window.addEventListener('load', function() {
    // TEXT FADES IN HEADER
    document.querySelector('.header__image-text').style.opacity = 1;
    document.querySelector('.header__image-text').style.visibility = 'visible';

    // SET UP NAVBAR WHEN USER LOADS WEBSITE
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset !== 0 && window.innerWidth > 500) {
        document.querySelector('.navbar ul li:nth-child(3) img').style.height = "7vh";
        document.querySelector('.navbar-mobile img').style.height = "7vh";
        navbar.style.minHeight = '8vh';
        navbar.style.boxShadow = '0 .1rem .5rem rgba(0,0,0,.1)';
    }
});

// MOBILE HAMBURGER BUTTON TOGGLE
document.querySelector('.navbar__checkbox').addEventListener('click', function() {
    const checkbox = document.querySelector('.navbar__checkbox');
    const navItems = document.querySelectorAll('.navbar ul li');

    if (checkbox.checked) {
        document.body.style.overflow = 'hidden';
        document.getElementsByTagName('ul')[0].style.transform = "translateY(0)";
        document.getElementsByTagName('ul')[0].style.opacity = "1";
        navItems.forEach((item, i) => {
            if (i != 2)
                item.style.animation = `fadeIn 0.5s ease forwards ${i / 4 + .1}s`;
        });
    } else {
        document.body.style.overflow = '';
        document.getElementsByTagName('ul')[0].style.transform = "";
        document.getElementsByTagName('ul')[0].style.opacity = "";
        navItems.forEach((item, i) => {
            if (i != 2)
                item.style.animation = '';
        });
    }
});

// CLOSE NAVBAR WHEN USER CLICKS ON A NAV ITEM
document.querySelectorAll('.navbar ul li a').forEach(a => {
    a.addEventListener('click', function(e) {
        document.querySelector('.navbar__checkbox').checked = false;
        document.body.style.overflow = '';
        document.getElementsByTagName('ul')[0].style.transform = "";
        document.getElementsByTagName('ul')[0].style.opacity = "";
        document.querySelectorAll('.navbar ul li').forEach((item, i) => {
            if (i != 2)
                item.style.animation = '';
        });
    });
});

// Resetting hamburger nav bar when user resizes past width of 501px
function noScroll(x) {
    if (x.matches) {
        document.querySelector('.navbar__checkbox').checked = false;
        document.body.style.overflow = '';
        document.getElementsByTagName('ul')[0].style.transform = "";
        document.getElementsByTagName('ul')[0].style.opacity = "";
        document.querySelectorAll('.navbar ul li').forEach((item, i) => {
            if (i != 2)
                item.style.animation = '';
        });
    }
}
window.matchMedia("(min-width: 501px)").addListener(noScroll);

// SMOOTH SCROLL
document.querySelector('.navbar').addEventListener('click', function(e) {
    if (e.target.localName === 'a') { // Makes sure the user is clicking on a nav link
        const section = document.getElementById(e.target.hash); // Get the section the user wants to scroll to
        if (!section) {
            return;
        }
        const sectionCoords = section.getBoundingClientRect();
        const navbarCoords = document.querySelector('.navbar').getBoundingClientRect();
        const heightDiff = window.pageYOffset !== 0 ? 0 :  .04 * window.innerHeight; // height difference between navbar before it's shrunk

        window.scrollTo({
            left: sectionCoords.left + window.pageXOffset,
            top: sectionCoords.top - navbarCoords.height + heightDiff + window.pageYOffset, // we subtract navbarCoords.height because we account for sticky navbar
            behavior: 'smooth'
        });
    };
});

// CHANGE NAVBAR HEIGHT WHEN USER SCROLLS
window.addEventListener('scroll', function(e) {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 500) {
        return;
    }
    if (window.pageYOffset !== 0) {
        document.querySelector('.navbar ul li:nth-child(3) img').style.height = "7vh";
        document.querySelector('.navbar-mobile img').style.height = "7vh";
        navbar.style.minHeight = '8vh';
        navbar.style.boxShadow = '0 .1rem .5rem rgba(0,0,0,.1)';
    } else {
        document.querySelector('.navbar ul li:nth-child(3) img').style.height = "";
        document.querySelector('.navbar-mobile img').style.height = "";
        navbar.style.minHeight = '';
        navbar.style.boxShadow = '';
    }
});

// Fixing height of navbar when user changes from desktop view to mobile view
window.matchMedia("(min-width: 501px)").addListener((x) => {
    const navbar = document.querySelector('.navbar');
    if (!x.matches) {
        document.querySelector('.navbar ul li:nth-child(3) img').style.height = "";
        document.querySelector('.navbar-mobile img').style.height = "";
        navbar.style.minHeight = '';
        navbar.style.boxShadow = '';
    }
});

// 
document.querySelector('.header__image-arrow').addEventListener('click', function() {
    const sectionCoords = document.getElementById('#story').getBoundingClientRect();
    const navbarCoords = document.querySelector('.navbar').getBoundingClientRect();
    const heightDiff = window.pageYOffset !== 0 ? 0 :  .04 * window.innerHeight;
    window.scrollTo({
        left: sectionCoords.left + window.pageXOffset,
        top: sectionCoords.top - navbarCoords.height + heightDiff + window.pageYOffset,
        behavior: 'smooth'
    });
});

// MENU 
document.querySelector('.section-menu-options').addEventListener('click', function(e){
    const options = document.querySelectorAll('.section-menu-options li');
    options.forEach(option => {
        if (option != e.target) {
            option.classList.remove('active');
        } else {
            option.classList.add('active');
        }
    });
});