const luz = document.getElementById('toggle-btn');
luz.addEventListener('click', troca);

let result = 0;
let quebra = 0;
function troca() {
  quebra += 1;
  if (quebra <= 10) {
    if (result === 0) {
      result = 1
      document.getElementById("ld").src = 'img/Lâmpada L.jpg';

    } else {
      result = 0;
      document.getElementById("ld").src = 'img/Lâmpada D.webp';
    }
  } else {
    document.getElementById("ld").src = "img/Luz Vermelhs.webp";
  };
};