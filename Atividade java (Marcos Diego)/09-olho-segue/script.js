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
  const direito = localdoOlho[1].getBoundingClientRect();
  //console.log(`olho esquerdo:x=${esquerdo.x}   y=${esquerdo.y}`);
  //console.log(`olho direito:x=${direito.x}   y=${direito.y}`)
  const EsquerdoY = mouseY - esquerdo.top + 50;
  const EsquerdoX = mouseX - esquerdo.left + 50;
  const DireitoY = mouseY - direito.top + 50;
  const DireitoX = mouseY - direito.left + 50;

  //console.log(`raioEsquerdo = ${raioEsquerdo}     raioDireito = ${raioDireito}`)


  const distEsquerda = Math.sqrt(EsquerdoX * EsquerdoX + EsquerdoY * EsquerdoY);
  const distDireita = Math.sqrt(DireitoX * DireitoX + DireitoY * DireitoY);
  const maxDist = 30;
  //console.log(`graosEsquerdo = ${graosEsquerdo}     graosDireito = ${graosDireito}`)
  let errorEsquerda;
  if (distEsquerda > maxDist) {
    errorEsquerda = maxDist / distEsquerda;
  } else {
    errorEsquerda = 1;
  };


  let errorDireita;
  if (distDireita > maxDist) {
    errorDireita = maxDist / distDireita;
  } else {
    errorDireita = 1;
  };


  const moveEsquerdoX = EsquerdoX * errorEsquerda;
  const moveEsquerdoY = EsquerdoY * errorEsquerda;
  const moveDireitoX = DireitoX * errorDireita;
  const moveDireitoY = DireitoY * errorDireita;

  const localdaPupila = document. getElementsByClassName("pupil");
 localdaPupila[0].style.transform = `translate(${moveEsquerdoX}px, ${moveEsquerdoY}px)`;
 localdaPupila[1].style.transform = `translate(${moveDireitoX}px, ${moveEsquerdoY}px)`
};

