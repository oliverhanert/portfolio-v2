// loader.js
export class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Error loading component: ${response.statusText}`);
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error('Failed to load component:', error);
        }
    }

    static async loadProjects() {
        try {
            console.log('Attempting to load projects.json');
            const response = await fetch('./projects/projects.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Loaded projects:', data);
            
            if (!data || !data.projects || !Array.isArray(data.projects)) {
                console.error('Invalid data structure in projects.json');
                return { projects: [] };
            }
            
            return data;
        } catch (error) {
            console.error('Failed to load projects:', error);
            return { projects: [] };
        }
    }

    static async loadProjectContent(projectId) {
        try {
            const response = await fetch(`./projects/project${projectId}.html`);
            if (!response.ok) throw new Error(`Error loading project content: ${response.statusText}`);
            return await response.text();
        } catch (error) {
            console.error('Failed to load project content:', error);
            return '';
        }
    }
}