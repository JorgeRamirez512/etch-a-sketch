const container = document.getElementById("container");

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        container.appendChild(row)
    }
}

createGrid(16,16);

const cells = document.querySelectorAll(".cell");

cells.forEach (cell => {
    cell.addEventListener("mouseover", function() {
        this.style.backgroundColor = "blue";
    })

    cell.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    })
})


document.addEventListener("mousemove", function(event){
    const trail = document.createElement("div");
    trail.className = "trail";

    const containerRect = container.getBoundingClientRect();
    trail.style.left = (event.clientX - container.offsetLeft - 5) + "px";
    trail.style.top = (event.clientY - container.offsetTop - 5) + "px";
    container.appendChild(trail);

    setTimeout(function() {
        trail.remove();
    }, 1000);
});

