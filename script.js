
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});





const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navContainer = document.querySelector('.nav-container');

// Initial setup
gsap.set(mobileMenu, { 
autoAlpha: 0,
yPercent: -5
});

// Hamburger animation
function animateHamburger(isOpen) {
if (isOpen) {
gsap.to(hamburgerIcon, {
    backgroundColor: 'transparent',
    duration: 0.2
});
gsap.to(hamburgerIcon.querySelectorAll('::before, ::after'), {
    top: 0,
    rotation: isOpen ? 45 : 0,
    duration: 0.3
});
} else {
gsap.to(hamburgerIcon, {
    backgroundColor: '#333',
    duration: 0.2
});
gsap.to(hamburgerIcon.querySelectorAll('::before'), {
    top: '-6px',
    rotation: 0,
    duration: 0.3
});
gsap.to(hamburgerIcon.querySelectorAll('::after'), {
    top: '6px',
    rotation: 0,
    duration: 0.3
});
}
}

// Mobile menu animation
function toggleMenu() {
const isOpen = mobileMenu.classList.contains('active');

if (!isOpen) {
mobileMenu.classList.add('active');
gsap.to(mobileMenu, {
    autoAlpha: 1,
    yPercent: 0,
    duration: 0.4,
    ease: "power2.out"
});

// Animate menu items
gsap.from('.mobile-menu a', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
    ease: "power2.out"
});
} else {
gsap.to(mobileMenu, {
    autoAlpha: 0,
    yPercent: -5,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.remove('active')
});
}

animateHamburger(!isOpen);
}





hamburger.addEventListener('click', toggleMenu);

// Page load animations
window.addEventListener('load', () => {
gsap.from(navContainer, {
y: -20,
opacity: 0,
duration: 1,
ease: "power2.out"
});

gsap.from('.hero-content > *', {
y: 30,
opacity: 0,
duration: 1,
stagger: 0.2,
ease: "power2.out"
});
});

document.addEventListener('click', (e) => {
if (!hamburger.contains(e.target) && 
!mobileMenu.contains(e.target) && 
mobileMenu.classList.contains('active')) {
toggleMenu();
}
});
