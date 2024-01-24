const container = document.getElementById("container");
let isEraserOn = false; // Variable to track if the eraser is on

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

const gridSizeSlider = document.getElementById("gridSizeSlider");
const clearGridBtn = document.getElementById("clearGridBtn");
const toggleEraserBtn = document.getElementById("toggleEraserBtn");

gridSizeSlider.addEventListener("input", function() {
    const gridSize = parseInt(gridSizeSlider.value);
    clearGrid();
    createGrid(gridSize, gridSize);
});

clearGridBtn.addEventListener("click", clearGrid);

toggleEraserBtn.addEventListener("click", function() {
    isEraserOn = !isEraserOn; // Toggle the eraser state
    toggleEraserBtn.textContent = isEraserOn ? "Eraser On" : "Eraser Off";
});

function clearGrid() {
    // Remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Event delegation for dynamically added cells
container.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("cell")) {
        if (isEraserOn) {
            event.target.style.backgroundColor = ""; // Erase color
        } else {
            event.target.style.backgroundColor = getRandomColor();
        }
    }
});

function getRandomColor() {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
