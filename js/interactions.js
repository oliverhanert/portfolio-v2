class SiteInteractions {
    constructor() {
        this.initMenu();
        this.initHoverReveal();
        this.initMovingBanner();
        this.initSmoothScroll();
    }

    initMenu() {
        const menuButton = document.querySelector('.menu-button');
        const menuOverlay = document.querySelector('.menu-overlay');
        let isMenuOpen = false;

        menuButton.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            menuOverlay.classList.toggle('active');
            menuButton.textContent = isMenuOpen ? 'Close' : 'Menu';
        });
    }

    initHoverReveal() {
        const links = document.querySelectorAll('[data-hover]');
        const hoverReveal = document.createElement('div');
        hoverReveal.className = 'hover-reveal';
        document.body.appendChild(hoverReveal);

        links.forEach(link => {
            const imgSrc = link.getAttribute('data-hover');
            
            link.addEventListener('mousemove', (e) => {
                hoverReveal.classList.add('active');
                hoverReveal.style.transform = `translate(${e.clientX + 20}px, ${e.clientY + 20}px)`;
                hoverReveal.style.backgroundImage = `url(${imgSrc})`;
            });

            link.addEventListener('mouseleave', () => {
                hoverReveal.classList.remove('active');
            });
        });
    }

    initMovingBanner() {
        const banner = document.querySelector('.moving-banner');
        const text = banner.querySelector('.banner-text');
        
        // Clone the text to create a seamless loop
        for(let i = 0; i < 3; i++) {
            banner.appendChild(text.cloneNode(true));
        }
    }

    initSmoothScroll() {
        let target = 0;
        let current = 0;
        let ease = 0.075;

        const content = document.querySelector('.smooth-content');
        const viewport = document.querySelector('.viewport');

        if (!content || !viewport) return;

        // Set initial height
        setHeight();

        function setHeight() {
            document.body.style.height = `${content.getBoundingClientRect().height}px`;
        }

        function lerp(start, end, t) {
            return start * (1 - t) + end * t;
        }

        function update() {
            // Update current position
            current = lerp(current, target, ease);
            current = Math.round(current * 100) / 100;
            
            // Apply transform
            content.style.transform = `translate3d(0, ${-current}px, 0)`;
            
            // Call next frame
            requestAnimationFrame(update);
        }

        // Start animation
        update();

        // Update target on scroll
        window.addEventListener('scroll', () => {
            target = window.scrollY;
        });

        // Update height on resize
        window.addEventListener('resize', setHeight);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new SiteInteractions();
});