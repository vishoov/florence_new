document.addEventListener('DOMContentLoaded', function() {

    // Hero Swiper (Using the Swiper library's initialization)
    const heroSwiper = new Swiper('.heroSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    // Swiper 1 - Duplex Wall
    const brandingSwiper1 = document.querySelector('.brandingSwiper1');
    if (brandingSwiper1) {
        const swiperWrapper1 = brandingSwiper1.querySelector('.swiper-wrapper');
        const slides1 = brandingSwiper1.querySelectorAll('.swiper-slide');
        const slideCount1 = slides1.length;
        let slideIndex1 = 0;

        const nextButton1 = brandingSwiper1.querySelector('#nextButtonDuplex');
        const prevButton1 = brandingSwiper1.querySelector('#prevButtonDuplex');

        function updateSwiper1() {
            swiperWrapper1.style.transform = `translateX(-${slideIndex1 * 100}%)`;
        }

        function swiperNext1() {
            slideIndex1 = (slideIndex1 + 1) % slideCount1;
            updateSwiper1();
        }

        function swiperPrev1() {
            slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
            updateSwiper1();
        }

        nextButton1.addEventListener('click', swiperNext1);
        prevButton1.addEventListener('click', swiperPrev1);

        updateSwiper1();
    }

    // Swiper 2 - Living Room
    const brandingSwiper2 = document.querySelector('.brandingSwiper2');
    if (brandingSwiper2) {
        const swiperWrapper2 = brandingSwiper2.querySelector('.swiper-wrapper');
        const slides2 = brandingSwiper2.querySelectorAll('.swiper-slide');
        const slideCount2 = slides2.length;
        let slideIndex2 = 0;

        const nextButton2 = brandingSwiper2.querySelector('#nextButtonLiving');
        const prevButton2 = brandingSwiper2.querySelector('#prevButtonLiving');

        function updateSwiper2() {
            swiperWrapper2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
        }

        function swiperNext2() {
            slideIndex2 = (slideIndex2 + 1) % slideCount2;
            updateSwiper2();
        }

        function swiperPrev2() {
            slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
            updateSwiper2();
        }

        nextButton2.addEventListener('click', swiperNext2);
        prevButton2.addEventListener('click', swiperPrev2);

        updateSwiper2();
    }

    // Swiper 3 - Mandir
    const brandingSwiper3 = document.querySelector('.brandingSwiper3');
    if (brandingSwiper3) {
        const swiperWrapper3 = brandingSwiper3.querySelector('.swiper-wrapper');
        const slides3 = brandingSwiper3.querySelectorAll('.swiper-slide');
        const slideCount3 = slides3.length;
        let slideIndex3 = 0;

        const nextButton3 = brandingSwiper3.querySelector('#nextButtonMandir');
        const prevButton3 = brandingSwiper3.querySelector('#prevButtonMandir');

        function updateSwiper3() {
            swiperWrapper3.style.transform = `translateX(-${slideIndex3 * 100}%)`;
        }

        function swiperNext3() {
            slideIndex3 = (slideIndex3 + 1) % slideCount3;
            updateSwiper3();
        }

        function swiperPrev3() {
            slideIndex3 = (slideIndex3 - 1 + slideCount3) % slideCount3;
            updateSwiper3();
        }

        nextButton3.addEventListener('click', swiperNext3);
        prevButton3.addEventListener('click', swiperPrev3);

        updateSwiper3();
    }

    // Swiper 4 - Terrace
    const brandingSwiper4 = document.querySelector('.brandingSwiper4');
    if (brandingSwiper4) {
        const swiperWrapper4 = brandingSwiper4.querySelector('.swiper-wrapper');
        const slides4 = brandingSwiper4.querySelectorAll('.swiper-slide');
        const slideCount4 = slides4.length;
        let slideIndex4 = 0;

        const nextButton4 = brandingSwiper4.querySelector('#nextButtonTerrace');
        const prevButton4 = brandingSwiper4.querySelector('#prevButtonTerrace');

        function updateSwiper4() {
            swiperWrapper4.style.transform = `translateX(-${slideIndex4 * 100}%)`;
        }

        function swiperNext4() {
            slideIndex4 = (slideIndex4 + 1) % slideCount4;
            updateSwiper4();
        }

        function swiperPrev4() {
            slideIndex4 = (slideIndex4 - 1 + slideCount4) % slideCount4;
            updateSwiper4();
        }

        nextButton4.addEventListener('click', swiperNext4);
        prevButton4.addEventListener('click', swiperPrev4);

        updateSwiper4();
    }

     // Swiper 3 - Mandir
     const brandingSwiper5 = document.querySelector('.brandingSwiper5');
     if (brandingSwiper5) {
         const swiperWrapper5 = brandingSwiper5.querySelector('.swiper-wrapper');
         const slides5 = brandingSwiper5.querySelectorAll('.swiper-slide');
         const slideCount5 = slides5.length;
         let slideIndex5 = 0;
 
         const nextButton5 = brandingSwiper5.querySelector('#nextButtonFoyer');
         const prevButton5 = brandingSwiper5.querySelector('#prevButtonFoyer');
 
         function updateSwiper5() {
             swiperWrapper5.style.transform = `translateX(-${slideIndex5 * 100}%)`;
         }
 
         function swiperNext5() {
             slideIndex5 = (slideIndex5 + 1) % slideCount5;
             updateSwiper5();
         }
 
         function swiperPrev5() {
             slideIndex5 = (slideIndex5 - 1 + slideCount5) % slideCount5;
             updateSwiper5();
         }
 
         nextButton5.addEventListener('click', swiperNext5);
         prevButton5.addEventListener('click', swiperPrev5);
 
         updateSwiper5();
     }


    // Navbar Scroll Hide/Show (No changes needed)
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

    // Mobile Menu Handling (No changes needed)
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

    // Contact Form Popup (No changes needed)
    const formTrigger = document.querySelector('.form-trigger');
    const formPopup = document.querySelector('.form-popup');
    const closeBtn = document.querySelector('.close-btn');

    if (formTrigger && formPopup && closeBtn) {
        formTrigger.addEventListener('click', () => {
            formPopup.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            formPopup.classList.remove('active');
        });
    }

    // Page Load Animations (No changes needed)
    gsap.from(navContainer, {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Close mobile menu when clicking outside (No changes needed)
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) &&
            !mobileMenu.contains(e.target) &&
            mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Initialize hamburger icon color (No changes needed)
    animateHamburger(false);

    // Banner Title Animation (No changes needed)
    gsap.fromTo(".banner-title", {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
    });
});
