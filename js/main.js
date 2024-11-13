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

class ProjectManager {
    constructor() {
        this.projects = [];
        this.currentFilter = 'all';
    }

    async loadProjects() {
        try {
            const response = await fetch('/projects/data/projects.json');
            const data = await response.json();
            this.projects = data.projects;
            return this.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }

    async renderProjectGrid() {
        const gridContainer = document.querySelector('.project-grid');
        if (!gridContainer) return;

        const projects = await this.loadProjects();
        const filteredProjects = this.currentFilter === 'all' 
            ? projects 
            : projects.filter(p => p.category === this.currentFilter);

        const html = filteredProjects.map(project => `
            <article class="project-item ${project.category}" data-project-id="${project.id}">
                <div class="project-content">
                    <h2 class="project-title">${project.title}</h2>
                    <span class="project-category">${project.category}</span>
                </div>
                <div class="project-image">
                    <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                </div>
            </article>
        `).join('');

        gridContainer.innerHTML = html;
        this.initializeProjectLinks();
    }

    initializeProjectLinks() {
        document.querySelectorAll('.project-item').forEach(item => {
            const projectId = item.dataset.projectId;
            
            // Make entire project card clickable
            item.addEventListener('click', (e) => {
                // Prevent default if it's a link or button
                if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button') {
                    return;
                }
                window.location.href = `/projects/content/${projectId}`;
            });

            // Add hover effect for images
            const image = item.querySelector('img');
            if (image) {
                image.addEventListener('load', () => {
                    item.classList.add('image-loaded');
                });
            }
        });
    }

    initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        if (!filterButtons.length) return;

        filterButtons.forEach(btn => {
            btn.addEventListener('click', async () => {
                const category = btn.dataset.filter;
                this.currentFilter = category;
                
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Animate grid items out
                const grid = document.querySelector('.project-grid');
                grid.style.opacity = '0';
                grid.style.transform = 'translateY(20px)';

                // Wait for animation
                await new Promise(resolve => setTimeout(resolve, 300));
                
                // Update grid content
                await this.renderProjectGrid();

                // Animate grid items in
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            });
        });
    }

    async loadProjectDetail(projectId) {
        try {
            const projects = await this.loadProjects();
            return projects.find(p => p.id === projectId);
        } catch (error) {
            console.error('Error loading project detail:', error);
            return null;
        }
    }
}

class PortfolioApp {
    constructor() {
        this.projectManager = new ProjectManager();
        this.init();
    }

    async init() {
        try {
            console.log('Initializing app...');
            await this.loadCommonComponents();
            
            // Initialize menu after components are loaded
            new MenuController();
            
            // Initialize page-specific functionality
            const path = window.location.pathname;
            if (path.endsWith('/') || path.endsWith('/index.html')) {
                await this.initHomePage();
            } else if (path.endsWith('/projects.html')) {  // Add this condition
                await this.initProjectsPage();
            } else if (path.includes('project.html')) {
                await this.initProjectPage();
            }

            this.initCommonFeatures();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // Add this new method
    async initProjectsPage() {
        console.log('Initializing projects page...');
        // Initialize projects grid and filters
        await this.projectManager.renderProjectGrid();
        this.projectManager.initializeFilters();
    }

    // Rest of your PortfolioApp methods remain the same
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
        // Initialize projects grid and filters
        await this.projectManager.renderProjectGrid();
        this.projectManager.initializeFilters();
    }

    initCommonFeatures() {
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true
            });
        }

        // Add scroll class to header
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }
}


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});