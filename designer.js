document.addEventListener('DOMContentLoaded', function() {

    // Hero Swiper (Using the Swiper library's initialization)
    const heroSwiper = new Swiper('.heroSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });

    // Function to initialize and control a Swiper
    function initializeSwiper(swiperContainerClass, prevButtonId, nextButtonId) {
        const swiperContainer = document.querySelector(swiperContainerClass);

        if (swiperContainer) {
            const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
            const slides = swiperContainer.querySelectorAll('.swiper-slide');
            const slideCount = slides.length;
            let slideIndex = 0;
            let autoplayinterval;

            const autoplay = {
                delay:4000,
                speed: 4500,
                pauseOnHover:true
            }

            const nextButton = document.getElementById(nextButtonId); // Get button by ID
            const prevButton = document.getElementById(prevButtonId); // Get button by ID

            function updateSwiper() {
                swiperWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
            }

            function swiperNext() {
                slideIndex = (slideIndex + 1) % slideCount;
                updateSwiper();
                resetAutoplay();
            }

            function swiperPrev() {
                slideIndex = (slideIndex - 1 + slideCount) % slideCount;
                updateSwiper();
                resetAutoplay();
            }
            function startAutoplay(){
                autoplayinterval = setInterval(() => {
                    swiperNext();
                }, autoplay.delay);
            }

            function stopAutoplay(){
                clearInterval(autoplayinterval);
            }

            function resetAutoplay() {
                stopAutoplay();
                startAutoplay();
            }

            startAutoplay();

            if(autoplay.pauseOnHover){
                swiperContainer.addEventListener('mouseenter', stopAutoplay);
                swiperContainer.addEventListener('mouseleave', startAutoplay);
            }

            nextButton.addEventListener('click', swiperNext);
            prevButton.addEventListener('click', swiperPrev);

            updateSwiper();
        }
    }

    // Initialize each swiper using the function
    initializeSwiper('.brandingSwiper1', 'prevButtonDuplex', 'nextButtonDuplex');
    initializeSwiper('.brandingSwiper2', 'prevButtonLiving', 'nextButtonLiving');
    initializeSwiper('.brandingSwiper3', 'prevButtonMandir', 'nextButtonMandir');
    initializeSwiper('.brandingSwiper4', 'prevButtonTerrace', 'nextButtonTerrace');
    initializeSwiper('.brandingSwiper5', 'prevButtonFoyer', 'nextButtonFoyer');

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




// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
    toggleScrollButton();
};

function toggleScrollButton() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Scroll back to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});
