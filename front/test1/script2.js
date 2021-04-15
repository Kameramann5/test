let x = +bounds.getAttribute('cx');
let y = +bounds.getAttribute('cy');
let dr = +bounds.getAttribute('r') - drag.getAttribute('r');

addEventListener('mousemove', e => {
    let dy = y - e.y;
    let dx = x - e.x;
    if (dx * dx + dy * dy < dr * dr) {
        dx = e.layerX;
        dy = e.layerY;
    } else {
        let a = Math.atan2(dy, dx);
        dx = x - Math.cos(a) * dr;
        dy = y - Math.sin(a) * dr;
    }
    drag.setAttribute('transform', `translate(${dx},${dy})`);
});