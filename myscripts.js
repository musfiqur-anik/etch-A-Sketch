// Function to create default grid items
function initializeDefaultGrid() {
    const container = document.getElementById('container');
    const defaultSize = 16; // Default grid size

    for (let i = 1; i <= defaultSize * defaultSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }

    // Set default grid template columns
    container.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
}

// Function to create a new grid based on user input
function create() {
    const container = document.getElementById('container');
    let button = prompt('Set your grid size:');

    // Clear existing grid items
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create new grid items based on user input
    for (let i = 1; i <= button * button; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }

    // Update grid template columns to reflect the new grid size
    container.style.gridTemplateColumns = `repeat(${button}, 1fr)`;
}

// Initialize the grid with default items when the page loads
document.addEventListener('DOMContentLoaded', initializeDefaultGrid);
