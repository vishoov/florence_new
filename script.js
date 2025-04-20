document.addEventListener("DOMContentLoaded", function() {

    
    // Navbar Scroll Hide/Show
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        // Hide/Show Navbar
        if (Math.abs(currentScrollPosition - lastScrollPosition) < scrollThreshold) {
            return;
        }
        
        if (currentScrollPosition > lastScrollPosition) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollPosition = currentScrollPosition;

        // Hide Hero Section if scrolled more than 150vh
        if (currentScrollPosition > window.innerHeight * 1.5) {
            heroSection.style.opacity = 0;
        } else {
            heroSection.style.opacity = 1;
        }
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
        effect: 'slide', // Enables fade effect
        fadeEffect: { crossFade: true }, // Ensures smooth fading between slides
        loop: true, // Enables looping of slides
        autoplay: {
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
        },
        navigation: {
            nextEl: '.swiper-button-next', // Selector for next button
            prevEl: '.swiper-button-prev', // Selector for previous button
        },
        speed: 2000, // Transition speed in milliseconds
    });
    // Contact Form Popup
    const formTrigger = document.querySelector('.form-trigger');
    const formPopup = document.querySelector('.form-popup');
    const closeBtn = document.querySelector('.close-btn');

    if(formTrigger && formPopup && closeBtn) {
        formTrigger.addEventListener('click', () => {
                window.location.href = './contact.html';
        });

        // closeBtn.addEventListener('click', () => {
        //     formPopup.classList.remove('active');
        // });
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
  


//   // Smooth scroll for "Who we are" button
// document.querySelector('.who-we-are').addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetSection = document.querySelector(this.getAttribute('href'));
//     if (targetSection) {
//         targetSection.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }
// });

// Intersection Observer for fade-in animations
const observerConfig = {
    threshold: 0.2,
    rootMargin: '50px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerConfig);
// Fix class names in selectors
const fadeElements = [
    '.strategy-main-title',
    '.strategy-description',
    '.strategy-building-img',
    '.strategy-solutions'
].forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => fadeInObserver.observe(element));
});

// Fix read more animation
const readMoreLink = document.querySelector('.strategy-readmore');
if (readMoreLink) {
    readMoreLink.addEventListener('mouseenter', function() {
        const arrow = this.querySelector('.strategy-arrow');
        if (arrow) {
            arrow.style.transform = 'translateX(10px)';
        }
    });

    readMoreLink.addEventListener('mouseleave', function() {
        const arrow = this.querySelector('.strategy-arrow');
        if (arrow) {
            arrow.style.transform = 'translateX(0)';
        }
    });
}

// Fix image loading animation
document.querySelector('.strategy-building-img').addEventListener('load', function() {
    this.classList.add('image-loaded');
});

// // Optional: Simplified parallax effect
// window.addEventListener('scroll', function() {
//     const buildingImage = document.querySelector('.strategy-pattern');
//     if (buildingImage) {
//         const scrolled = window.pageYOffset;
//         const rate = scrolled * 0.3;
//         requestAnimationFrame(() => {
//             buildingImage.style.transform = `translateY(${rate}px)`;
//         });
//     }
// });
function setupParallaxEffects() {
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxElement = parallaxContainer?.querySelector('.strategy-pattern');

    // Function to update the parallax effect
    function updateParallax() {
        if (parallaxElement && parallaxContainer) {
            const containerRect = parallaxContainer.getBoundingClientRect();
            const containerHeight = containerRect.height;
            const windowHeight = window.innerHeight;

            // Check if the container is in the viewport
            if (containerRect.top < windowHeight && containerRect.bottom > 0) {
                const scrollPosition = window.scrollY;
                const elementOffsetTop = parallaxContainer.offsetTop;
                const distanceScrolled = scrollPosition - elementOffsetTop;

                // Apply a smooth parallax effect
                const parallaxSpeed = 0.3; // Adjust speed as needed
                const translateYValue = distanceScrolled * parallaxSpeed;

                // Apply transform only once and smoothly
                parallaxElement.style.transform = `translateY(${translateYValue}px)`;
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateParallax);
}



document.addEventListener('DOMContentLoaded', setupParallaxEffects);



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

document.addEventListener('DOMContentLoaded', function() {
   
   
const formTrigger = document.querySelector('.form-trigger');
const formPopup = document.querySelector('.form-popup');
const closeBtn = document.querySelector('.close-btn');

// Open popup
formTrigger.addEventListener('click', () => {
    window.location.href = './contact.html';
});

// // Close popup
// closeBtn.addEventListener('click', () => {
//     formPopup.classList.remove('active');
// });
});




  window.onload = function() {


    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      emailjs.sendForm('service_m1xxj92', 'template_qepq3uc', this)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('You will recieve a response from Florence Stone Concepts Team shortly!');
        }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send your message. Please try again.');
        });
    });
  };

