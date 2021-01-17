/*
 * @Author: Gavin
 * @Date:   2021-01-13 20:36:28
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-01-16 19:08:50
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
        if (!document.querySelector('.section-gallery__overlay').contains(document.querySelector('.section-gallery__overlay').getElementsByTagName('img')[0]))
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
    e.preventDefault();
    if (e.target.localName === 'a') { // Makes sure the user is clicking on a nav link
        const section = document.getElementById(e.target.hash.slice(1)); // Get the section the user wants to scroll to
        if (!section) {
            return;
        }
        const sectionCoords = section.getBoundingClientRect();
        const navbarCoords = document.querySelector('.navbar').getBoundingClientRect();
        const heightDiff = window.pageYOffset !== 0 ? 0 : .04 * window.innerHeight; // height difference between navbar before it's shrunk

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
        navbar.style.minHeight = '12vh';
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

// Scroll when clicking on down arrow in the header
document.querySelector('.header__image-arrow').addEventListener('click', function() {
    const sectionCoords = document.getElementById('story').getBoundingClientRect();
    const navbarCoords = document.querySelector('.navbar').getBoundingClientRect();
    const heightDiff = window.pageYOffset !== 0 ? 0 : .04 * window.innerHeight;
    window.scrollTo({
        left: sectionCoords.left + window.pageXOffset,
        top: sectionCoords.top - navbarCoords.height + heightDiff + window.pageYOffset,
        behavior: 'smooth'
    });
});

// MENU 
document.querySelector('.section-menu-options').addEventListener('click', function(e) {
    const options = document.querySelectorAll('.section-menu-options li');
    const optionMenu = document.querySelectorAll('.section-menu-option li');
    options.forEach((option, index) => {
        if (option != e.target) {
            option.classList.remove('section-menu-options--active');
            optionMenu[index].classList.add('section-menu-option--hidden');
        } else {
            option.classList.add('section-menu-options--active');
            optionMenu[index].classList.remove('section-menu-option--hidden');
        }
    });
});

// GALLERY

// OPENS OVERLAY
document.querySelector('.section-gallery__container').addEventListener('click', function(e) {
    const imgSrc = e.target.getAttribute('src');
    const imgAlt = e.target.getAttribute('alt');
    document.querySelector('.section-gallery__overlay').style.display = 'flex';
    document.querySelector('.navbar').style.display = 'none';
    document.body.style.overflow = 'hidden';
    document.querySelector('.section-gallery__overlay').insertAdjacentHTML('afterbegin', `<img src="${imgSrc}" alt="${imgAlt}">`);
});

// CLOSES OVERLAY
document.querySelector('.section-gallery__overlay--close').addEventListener('click', function() {
    document.querySelector('.section-gallery__overlay').removeChild(document.querySelector('.section-gallery__overlay').childNodes[0]);
    document.querySelector('.section-gallery__overlay').style.display = 'none';
    document.querySelector('.navbar').style.display = 'flex';
    document.body.style.overflow = '';
});

// CHANGE IMAGE IN THE OVERLAY
document.querySelector('.section-gallery__overlay').addEventListener('click', function(e) {
    if (e.target === document.querySelector('.section-gallery__overlay--close')) {
        return;
    }
    const width = window.InnerWidth;
    const image = document.querySelector('.section-gallery__overlay img');
    const imageList = document.querySelectorAll('.section-gallery__container img');
    const imagesSrc = [...document.querySelectorAll('.section-gallery__container img')].map(img => img.src);
    const currentImgNum = imagesSrc.indexOf(image.src);
    if (e.clientX < width / 2) { // user clicked on left side of the page so that means user wants to go to previous image
        if (currentImgNum === 0) {
            image.src = imageList[8].src;
            image.alt = imageList[8].alt;
        } else {
            image.src = imageList[currentImgNum - 1].src;
            image.alt = imageList[currentImgNum - 1].alt;
        }
    } else { // next image
        if (currentImgNum === 8) {
            image.src = imageList[0].src;
            image.alt = imageList[0].alt;
        } else {
            image.src = imageList[currentImgNum + 1].src;
            image.alt = imageList[currentImgNum + 1].alt;
        }
    }
});