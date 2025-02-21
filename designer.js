document.addEventListener("DOMContentLoaded", function() {

    const brandingSwiper = document.querySelector('.brandingSwiper'); // Correct selector
    if (brandingSwiper) {
        const swiperWrapper = brandingSwiper.querySelector('.swiper-wrapper');
        const slides = brandingSwiper.querySelectorAll('.swiper-slide');
        const slideCount = slides.length;
        let slideIndex = 0;

        const nextButton = brandingSwiper.querySelector('#nextButton'); // Correct selector
        const prevButton = brandingSwiper.querySelector('#prevButton'); // Correct selector

        function updateSwiper() {
            swiperWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        function swiperNext() {
            slideIndex = (slideIndex + 1) % slideCount;
            updateSwiper();
        }

        function swiperPrev() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            updateSwiper();
        }

        nextButton.addEventListener('click', swiperNext);
        prevButton.addEventListener('click', swiperPrev);

        //Initial call to set up the first image
        updateSwiper();

    } else {
        console.warn("Swiper container not found!");
    }


    // Navbar Scroll Hide/Show
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        if (Math.abs(currentScrollPosition - lastScrollPosition) < scrollThreshold) {
            return;
        }
        
        if (currentScrollPosition > lastScrollPosition) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollPosition = currentScrollPosition;
    });

    // Mobile Menu Handling
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navContainer = document.querySelector('.nav-container');

    gsap.set(mobileMenu, { 
        autoAlpha: 0,
        yPercent: -5
    });

    function animateHamburger(isOpen) {
        if (isOpen) {
            gsap.to(hamburgerIcon, {
                backgroundColor: 'transparent',
                duration: 0.2
            });
        } else {
            gsap.to(hamburgerIcon, {
                backgroundColor: '#333',
                duration: 0.2
            });
        }
    }

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

    // Contact Form Popup
    const formTrigger = document.querySelector('.form-trigger');
    const formPopup = document.querySelector('.form-popup');
    const closeBtn = document.querySelector('.close-btn');

    if(formTrigger && formPopup && closeBtn) {
        formTrigger.addEventListener('click', () => {
            formPopup.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            formPopup.classList.remove('active');
        });
    }

    // Page Load Animations
    gsap.from(navContainer, {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && 
            !mobileMenu.contains(e.target) && 
            mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});
