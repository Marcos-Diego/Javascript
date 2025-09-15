const luz = document.getElementById('toggle-btn');
luz.addEventListener('click', troca);

let result = 0

function troca() {
  if (result === 0) {
    result = 1
    document.getElementById("ld").src='img/Lâmpada L.jpg';

  } else {
    result = 0;
    document.getElementById("ld").src='img/Lâmpada D.webp';
}
}