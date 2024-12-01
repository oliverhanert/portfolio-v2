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
            : projects.filter(p => {
                // Handle both string and array categories
                const categories = Array.isArray(p.category) ? p.category : [p.category];
                return categories.includes(this.currentFilter);
            });
    
        // Create the hover content container
        const hoverContent = document.createElement('div');
        hoverContent.className = 'project-hover-content';
        
        const html = filteredProjects.map(project => {
            // Convert category to string for data attribute
            const categoryString = Array.isArray(project.category) 
                ? project.category.join(', ') 
                : project.category;
    
            // Add all categories as classes for filtering
            const categoryClasses = Array.isArray(project.category)
                ? project.category.join(' ')
                : project.category;
    
            return `
                <article class="project-item ${categoryClasses}" 
                         data-project-id="${project.id}"
                         data-title="${project.title}" 
                         data-category="${categoryString}">
                    <div class="project-image">
                        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                    </div>
                </article>
            `;
        }).join('');
    
        gridContainer.innerHTML = html;
        gridContainer.appendChild(hoverContent);
        this.initializeProjectHovers();
    }

    initializeProjectHovers() {
        const projectGrid = document.querySelector('.project-grid');
        const projects = document.querySelectorAll('.project-item');
        const hoverContent = document.querySelector('.project-hover-content');
    
        projects.forEach(project => {
            project.addEventListener('mouseenter', () => {
                projectGrid.classList.add('item-hovered');
                
                // No need to split and join if it's already formatted in the data attribute
                hoverContent.innerHTML = `
                    <h2 class="project-title">${project.dataset.title}</h2>
                    <span class="project-category">${project.dataset.category}</span>
                `;
            });
    
            project.addEventListener('mouseleave', () => {
                projectGrid.classList.remove('item-hovered');
            });
    
            project.addEventListener('click', () => {
                const projectId = project.dataset.projectId;
                window.location.href = `/projects/content/${projectId}`;
            });
        });
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
            console.log('Current path:', path);

            if (path.endsWith('/') || path.endsWith('/index.html')) {
                await this.initHomePage();
            } else if (path.endsWith('/projects.html')) {
                console.log('Projects page detected');
                await this.initProjectsPage();
            } else if (path.includes('/projects/content/')) {
                console.log('Project detail page detected');
                await this.initProjectPage();
            }

            this.initCommonFeatures();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    async loadCommonComponents() {
        try {
            const basePath = this.getBasePath();
            await Promise.all([
                ComponentLoader.loadComponent('header', `${basePath}/components/header.html`),
                ComponentLoader.loadComponent('footer', `${basePath}/components/footer.html`)
            ]);
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    // Helper method to get the correct base path
    getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/projects/content/')) {
            return '../../..'; // Go up three levels from project detail pages
        }
        return '.'; // Default for root level pages
    }


    async initHomePage() {
        // Initialize projects grid and filters
        await this.projectManager.renderProjectGrid();
        this.projectManager.initializeFilters();
    }

    async initProjectsPage() {
        console.log('Initializing projects page...');
        // Use the same functionality as homepage for projects
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
    }
}



// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
