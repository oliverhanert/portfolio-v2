class MenuController {
    constructor() {
        this.menuButton = document.querySelector('.menu-toggle');
        this.menuOverlay = document.querySelector('.menu-overlay');
        this.isMenuOpen = false;

        this.init();
    }

    init() {
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
            }
        });

        // Prevent scroll when menu is open
        this.menuOverlay.addEventListener('wheel', (e) => {
            if (this.isMenuOpen) {
                e.preventDefault();
            }
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuOverlay.classList.toggle('active');
        this.menuButton.textContent = this.isMenuOpen ? 'Close' : 'Menu';
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
        
        // Add contrast to header elements if needed
        this.menuButton.style.color = this.isMenuOpen ? '#fff' : '';
        document.querySelector('.logo').style.color = this.isMenuOpen ? '#fff' : '';
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.menuOverlay.classList.remove('active');
        this.menuButton.textContent = 'Menu';
        document.body.style.overflow = '';
        this.menuButton.style.color = '';
        document.querySelector('.logo').style.color = '';
    }
}

// Initialize menu
document.addEventListener('DOMContentLoaded', () => {
    new MenuController();
});