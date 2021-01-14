/*
 * @Author: Gavin
 * @Date:   2021-01-13 20:36:28
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-01-14 00:59:33
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
    console.log(navItems);
    if (checkbox.checked) {
        document.getElementsByTagName('ul')[0].style.transform = "translateY(0)";
        document.getElementsByTagName('ul')[0].style.opacity = "1";
        navItems.forEach((item, i) => {
        	if (i != 2)
            	item.style.animation = `fadeIn 0.5s ease forwards ${i / 4 + .1}s`;
        });
    } else {
        document.getElementsByTagName('ul')[0].style.transform = "";
        document.getElementsByTagName('ul')[0].style.opacity = "";
        navItems.forEach((item, i) => {
        	if (i != 2)
            	item.style.animation = '';
        });
    }
});