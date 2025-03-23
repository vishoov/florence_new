const galleryData = [
    {
        id: 0,
        title: "Rock Morphic",
        description: "Durable and sophisticated with a matte finish that showcases the natural beauty of stone.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/01-ROCK MORPHIC/01.jpg",
        alt: "Alaska Diamond"
    },
    {
        id: 1,
        title: "Alaska Diamond",
        description: "Durable and sophisticated with a matte finish that showcases the natural beauty of stone.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/02-ALASKA DIAMOND/01.jpg",
        alt: "Alaska Diamond"
    },
    {
        id: 2,
        title: "Dragon Stone",
        description: "Unique textured finish with a bold and striking appearance.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/03-DRAGON STONE/01.jpg",
        alt: "Dragon Stone"
    },
    {
        id: 3,
        title: "Striped Dragon",
        description: "A sleek and modern finish with striped patterns that add depth.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/04-STRIPED DRAGON/01.jpg",
        alt: "Striped Dragon"
    },
    {
        id: 4,
        title: "Fluted Dolci",
        description: "Elegant fluted design that enhances any contemporary space.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/05-FLUTED DOLCI/01.jpg",
        alt: "Fluted Dolci"
    },
    {
        id: 5,
        title: "Ocean Grey",
        description: "Soft grey tones combined with a smooth texture for a calming aesthetic.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/06-OCEAN GREY/01.jpg",
        alt: "Ocean Grey"
    },
    {
        id: 6,
        title: "Walter White",
        description: "Bright and clean white finish ideal for modern spaces.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/08-WALTER WHITE/01.jpg",
        alt: "Walter White"
    },
    {
        id: 7,
        title: "Striped Steel",
        description: "Industrial-inspired striped finish with a metallic sheen.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/09-STRIPED STEEL/01.jpg",
        alt: "Striped Steel"
    },
    {
        id: 8,
        title: "Bamboo Black",
        description: "Dark bamboo-inspired texture for a bold statement.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/10-BAMBOO BLACK/01.jpg",
        alt: "Bamboo Black"
    },
    {
        id: 9,
        title: "White Waterfall",
        description: "Smooth white surface with subtle flowing patterns.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/11-WHITE WATERFALL/01.jpg",
        alt: "White Waterfall"
    },
    {
        id: 10,
        title: "Rex Beige",
        description: "Warm beige tones with a classic textured finish.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/12-REX BEIGE/01.jpg",
        alt: "Rex Beige"
    },
    {
        id: 11,
        title: "Rex Stripe",
        description: "Striped design with earthy tones for a natural look.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/13-REX STRIPE/01.jpg",
        alt: "Rex Stripe"
    },
    {
        id: 12,
        title: "Rex",
        description: "A versatile finish that blends modern and traditional aesthetics.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/14-REX/01.jpg",
        alt: "Rex"
    },
    {
        id: 13,
        title: "Pebble Stone",
        description: "Natural pebble-inspired texture for rustic charm.",
        imageSrc: "img/finishes/products/FINISHES-20250323T175107Z-001/15-PEBBLE STONE/01.jpg",
        alt: "Pebble Stone"
    }
];
// finishes.js - Gallery implementation
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentImageIndex = 0;
    
    // Initialize the gallery
    function initGallery() {
        renderGalleryItems();
        setupEventListeners();
    }
    
    // Render gallery items from data
    function renderGalleryItems() {
        galleryContainer.innerHTML = '';
        
        galleryData.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.index = index;
            
            galleryItem.innerHTML = `
                <div class="gallery-image-container">
                    <img 
                        src="${item.imageSrc}" 
                        alt="${item.alt}" 
                        class="gallery-image"
                        loading="lazy"
                    >
                </div>
                <div class="gallery-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            galleryContainer.appendChild(galleryItem);
        });
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Gallery item click
        galleryContainer.addEventListener('click', function(e) {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                currentImageIndex = parseInt(galleryItem.dataset.index);
                openModal(currentImageIndex);
            }
        });
        
        // Close modal
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Navigation
        prevBtn.addEventListener('click', showPreviousImage);
        nextBtn.addEventListener('click', showNextImage);
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!modal.classList.contains('show')) return;
            
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        });
    }
    
    // Open modal with specific image
    function openModal(index) {
        updateModalContent(index);
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = '';
    }
    
    // Update modal content with smooth transition
    function updateModalContent(index) {
        const item = galleryData[index];
        
        // Apply transition effect
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            modalImage.src = item.imageSrc;
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.description;
            
            // Reveal with animation
            modalImage.style.opacity = '1';
            modalImage.style.transform = 'translateX(0)';
        }, 300);
        
        modal.style.display = 'flex';
    }
    
    // Show previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        updateModalContent(currentImageIndex);
    }
    
    // Show next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        updateModalContent(currentImageIndex);
    }
    
    // Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            showNextImage();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            showPreviousImage();
        }
    }
    
    // Initialize the gallery
    initGallery();
});
