document.addEventListener("DOMContentLoaded", function() {
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

    // Hero Swiper Configuration
    const swiper = new Swiper('.heroSwiper', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 2000,
    });

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

    gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
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


function playVideo() {
    const video = document.getElementById('craftVideo');
    const overlay = document.getElementById('videoOverlay');
    
    if (video.paused) {
      video.play();
      overlay.style.opacity = '0';
      // Hide overlay after fade out
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 300);
    } else {
      video.pause();
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
    }
  }
  
  // Add click handler to video for pause functionality
  document.getElementById('craftVideo').addEventListener('click', function() {
    if (!this.paused) {
      playVideo();
    }
  });
  