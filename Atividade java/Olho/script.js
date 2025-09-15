document.addEventListener('mousemove', mouse);

function mouse(mouse) {
    const mx = mouse.clientX;
    const my = mouse.clientY;
    console.log(`Mouse X: ${mx}, Mouse Y: ${my}`);
}

function mouse() {
    const react = document.getElementsByClassName("eye").getBoundingClientRect;

    const px = react.left.toFixed();
    const py = react.top.toFixed();

    const dx = mx - px;
    const dy = my - py;
} 