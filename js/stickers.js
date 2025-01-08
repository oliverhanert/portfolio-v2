class StickerWall {
    constructor() {
        this.canvas = document.querySelector('.sticker-canvas');
        this.stickers = document.querySelectorAll('.sticker');
        this.isDragging = false;
        this.currentSticker = null;
        this.initialX = 0;
        this.initialY = 0;
        this.offsetX = 0;
        this.offsetY = 0;

        this.init();
    }

    init() {
        // Sæt initial størrelse på stickers
        this.stickers.forEach(sticker => {
            sticker.style.width = '120px';
            sticker.style.height = '120px';
        });

        // Placer stickers tilfældigt
        this.randomizePositions();
        
        // Tilføj event listeners
        this.stickers.forEach(sticker => {
            sticker.addEventListener('mousedown', (e) => this.startDragging(e, sticker));
            sticker.addEventListener('touchstart', (e) => this.startDragging(e, sticker));
        });

        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('touchmove', (e) => this.drag(e), { passive: false });
        document.addEventListener('mouseup', () => this.stopDragging());
        document.addEventListener('touchend', () => this.stopDragging());
    }

    randomizePositions() {
        const canvasRect = this.canvas.getBoundingClientRect();
        const textContent = document.querySelector('.text-content');
        const textRect = textContent.getBoundingClientRect();
        
        this.stickers.forEach(sticker => {
            // Generer tilfældige positioner inden for canvas
            let x, y;
            
            // 50% chance for at placere sticker på hver side af teksten
            if (Math.random() > 0.5) {
                // Venstre side
                x = Math.random() * (textRect.left - canvasRect.left - 100);
            } else {
                // Højre side
                x = textRect.right - canvasRect.left + Math.random() * (canvasRect.right - textRect.right - 100);
            }
            
            y = Math.random() * (canvasRect.height - 120);
            
            sticker.style.transform = `translate(${x}px, ${y}px)`;
            sticker.dataset.originalX = x;
            sticker.dataset.originalY = y;
        });
    }

    startDragging(e, sticker) {
        e.preventDefault();
        this.isDragging = true;
        this.currentSticker = sticker;
        this.currentSticker.classList.add('dragging');

        const event = e.type === 'mousedown' ? e : e.touches[0];
        const stickerRect = sticker.getBoundingClientRect();
        
        this.offsetX = event.clientX - stickerRect.left;
        this.offsetY = event.clientY - stickerRect.top;
    }

    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();

        const event = e.type === 'mousemove' ? e : e.touches[0];
        const canvasRect = this.canvas.getBoundingClientRect();
        
        let x = event.clientX - this.offsetX - canvasRect.left;
        let y = event.clientY - this.offsetY - canvasRect.top;

        // Begræns til canvas område
        x = Math.max(0, Math.min(x, canvasRect.width - 120));
        y = Math.max(0, Math.min(y, canvasRect.height - 120));

        this.currentSticker.style.transform = `translate(${x}px, ${y}px)`;
    }

    stopDragging() {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        this.currentSticker.classList.remove('dragging');
        
        // Tjek om stickeren er uden for synligt område
        const rect = this.currentSticker.getBoundingClientRect();
        const canvasRect = this.canvas.getBoundingClientRect();
        
        const isVisible = (
            rect.top >= canvasRect.top &&
            rect.left >= canvasRect.left &&
            rect.bottom <= canvasRect.bottom &&
            rect.right <= canvasRect.right
        );

        if (!isVisible) {
            // Reset til original position
            this.currentSticker.style.transform = `translate(${this.currentSticker.dataset.originalX}px, ${this.currentSticker.dataset.originalY}px)`;
        }
        
        this.currentSticker = null;
    }
}

// Initialiser når DOM'en er loaded
document.addEventListener('DOMContentLoaded', () => {
    new StickerWall();
}); 