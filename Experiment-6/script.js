let svg = document.getElementById("drawingArea");
let drawing = false;
let path;

svg.addEventListener("mousedown", e => {
    drawing = true;
    let x = e.offsetX;
    let y = e.offsetY;
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${x} ${y}`);
    path.setAttribute("stroke", "blue");
    path.setAttribute("fill", "none");
    svg.appendChild(path);
});

svg.addEventListener("mousemove", e => {
    if (!drawing) return;
    let d = path.getAttribute("d");
    d += ` L ${e.offsetX} ${e.offsetY}`;
    path.setAttribute("d", d);
});

svg.addEventListener("mouseup", () => {
    drawing = false;
});
