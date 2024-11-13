import { ComponentLoader } from './loader.js';

class MenuController {
    constructor() {
        setTimeout(() => {
            this.initializeMenu();
        }, 100);
    }

    initializeMenu() {
        this.menuButton = document.querySelector('.menu-toggle');
        this.menuOverlay = document.querySelector('.menu-overlay');
        this.closeBar = document.querySelector('.menu-close-bar');
        this.isMenuOpen = false;

        if (this.menuButton && this.menuOverlay && this.closeBar) {
            this.addEventListeners();
        } else {
            console.error('Menu elements not found');
        }
    }

    addEventListeners() {
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        this.closeBar.addEventListener('click', () => this.closeMenu());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuOverlay.classList.toggle('active');
        this.menuButton.textContent = this.isMenuOpen ? 'MENU' : 'MENU';
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.menuOverlay.classList.remove('active');
        this.menuButton.textContent = 'MENU';
        document.body.style.overflow = '';
    }
}

class PortfolioApp {
    constructor() {
        this.init();
    }

    async init() {
        try {
            console.log('Initializing app...');
            await this.loadCommonComponents();
            
            // Initialize menu after components are loaded
            new MenuController();
            
            if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')) {
                await this.initHomePage();
            } else if (window.location.pathname.includes('project.html')) {
                await this.initProjectPage();
            }

            this.initCommonFeatures();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    async loadCommonComponents() {
        try {
            await Promise.all([
                ComponentLoader.loadComponent('header', './components/header.html'),
                ComponentLoader.loadComponent('footer', './components/footer.html')
            ]);
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    async initHomePage() {
        try {
            const projectsData = await ComponentLoader.loadProjects();
            console.log('Projects data loaded:', projectsData);

            if (projectsData && Array.isArray(projectsData.projects)) {
                this.renderProjectGrid(projectsData.projects);
                this.initFilterButtons();
            }
        } catch (error) {
            console.error('Error initializing home page:', error);
        }
    }

    initFilterButtons() {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.filter;
                this.filterProjects(category);
                
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    filterProjects(category) {
        const items = document.querySelectorAll('.project-item');
        items.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    initCommonFeatures() {
        // Initialize AOS if needed
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true
            });
        }
    }

    // ... rest of your PortfolioApp methods ...
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});