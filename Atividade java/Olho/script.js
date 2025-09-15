document.addEventListener('mousemove', mouse);
document.addEventListener('mousemove', olhos);

let mx;
let my;

function mouse(mouse) {
     mx = mouse.clientX;
     my = mouse.clientY;
   // console.log(mx, my)
}

function olhos() {
        let element = document.getElementsByClassName("eye");

        let react1 = element[0].getBoundingClientRect();
        let react2 = element[1].getBoundingClientRect();


        let px1 = react1.x;
        let py1 = react1.y;
        let px2 = react2.x;
        let py2 = react2.y;

        let dx1 = mx - px1;
        let dy1 = my - py1;
        const dx2 = mx - px2;
        const dy2 = my - py2;


        let graos1 = Math.atan2(dy1, dx1);
        graos1 = Math.floor(graos1 * (180 / (Math.PI)));

        let graos2 = Math.atan2(dy2, dx2);
        graos2 = Math.floor(graos2 * (180 / (Math.PI)));

        console.log(graos1, graos2)
        let eyes = document.getElementsByClassName("pupil");
        
        let olho1 = eyes[0];
        
        olho1.style.transform = `rotate(${graos1}deg);`;

        console.log(olho1);

        
       /* eyes[1].style.transform = `rotate(${graos2}deg);`; */
};