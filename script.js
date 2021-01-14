/*
 * @Author: Gavin
 * @Date:   2021-01-13 20:36:28
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-01-14 03:09:57
 */

// TEXT FADES IN HEADER
window.addEventListener('load', function() {
    document.querySelector('.header__image-text').style.opacity = 1;
    document.querySelector('.header__image-text').style.visibility = 'visible';
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
        active = false;
        document.body.style.overflow = '';
        document.getElementsByTagName('ul')[0].style.transform = "";
        document.getElementsByTagName('ul')[0].style.opacity = "";
        navItems.forEach((item, i) => {
            if (i != 2)
                item.style.animation = '';
        });
    }
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