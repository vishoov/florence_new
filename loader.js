document.addEventListener("DOMContentLoaded", function() {
    splitTextIntoSpans(".llogo p");
    splitTextIntoSpans(".hero-title");

    gsap.set(".img-holder img", {left: "-110%"}); // Initially position images off-screen

    gsap.to(".img-holder img", {
        left: 0,
        stagger: 0.1,
        ease: "power4.out",
        duration: 1.5,
        delay: 4
    });

    gsap.to(".img-holder img", {
        left: "110%",
        stagger: -0.1,
        ease: "power4.out",
        duration: 1.5,
        delay: 7
    });

    startLoader(); // Call loader after DOM is ready
});

function splitTextIntoSpans(selector) {
    var element = document.querySelector(selector);
    if (element) {
        var text = element.innerText;
        var splitText = text
            .split("")
            .map(char => `<span>${char}</span>`)
            .join("");
        element.innerHTML = splitText;
    }
}

function startLoader() {
    var counterElement = document.querySelector(".counter p");
    var currentValue = 0;

    function updateCounter() {
        if (currentValue >= 100) {
            currentValue = 100;
            counterElement.innerHTML = formatCounter(currentValue);
            animateText();
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;
        currentValue = Math.min(currentValue, 100);
        
        counterElement.innerHTML = formatCounter(currentValue);

        var delay = Math.floor(Math.random() * 200) + 100;
        setTimeout(updateCounter, delay);
    }

    function formatCounter(value) {
        return value.toString().split("").map(char => `<span>${char}</span>`).join("") + "<span>%</span>";
    }

    function animateText() {
        setTimeout(() => {
            gsap.to(".counter p span", {
                top: "-400px",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 1
            });

            gsap.to(".llogo p span", {
                top: "0",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 1
            });

            gsap.to(".llogo p span", {
                top: "-400px",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 1,
                delay: 3
            });

            gsap.to(".overlay", {
                opacity: 0,
                pointerEvents: "none",
                ease: "power3.inOut",
                duration: 1,
                delay: 4
            });

            gsap.to(".hero img", {
                scale: 1,
                ease: "power3.inOut",
                duration: 2,
                delay: 3.5
            });
            

            gsap.fromTo(".hero-title span", {
                top: "400px"
            }, {
                top: "0",
                stagger: 0.05,
                ease: "power3.out",
                duration: 2,
                delay: 4
            });

            gsap.to(".navbar", {
                top:"0",
                ease:"power3.out",
                duration:1,
                delay:4.5
            });
            
        }, 300);
    }

    updateCounter();
}
