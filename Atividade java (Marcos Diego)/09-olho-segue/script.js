document.addEventListener('mousemove', mouse);
document.addEventListener('mousemove', olhos);

let mouseX;
let mouseY;

function mouse(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  // console.log(`x:${mouseX}  y:${mouseY}`)
};

function olhos() {
  const localdoOlho = document.getElementsByClassName("eye");
  const esquerdo = localdoOlho[0].getBoundingClientRect();
  //const direito = localdoOlho[1].getBoundingClientRect();

  let anguloEsquerdo = Math.atan2(mouseY - esquerdo.y, mouseX - esquerdo.x);
 // let anguloDireito = Math.atan2(mouseY - direito.y, mouseX - direito.y);
 // console.log(anguloDireito, anguloEsquerdo)

  let graosEsquerdo = anguloEsquerdo * (180 / Math.PI);
  //let graosDireito = anguloDireito * (180 / Math.PI);

  const localdaPupila = document.getElementsByClassName("pupil");
  localdaPupila[0].style.transform = `rotate(${graosEsquerdo}deg)`;
  localdaPupila[1].style.transform = `rotate(${graosEsquerdo}deg)`;
};
