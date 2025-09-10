let semaforo = document.getElementById('r');
semaforo.addEventListener("click", lr);

function lr () {
    document.getElementById("semaforo-img").src='img/Luz Vermelha.webp'
}

semaforo = document.getElementById('y');
semaforo.addEventListener("click", ly);

function ly () {
    document.getElementById("semaforo-img").src='img/Luz Amarela.jpg'
}

semaforo = document.getElementById('g');
semaforo.addEventListener("click", lg);


function lg () {
    document.getElementById("semaforo-img").src='img/Luz Verde.jpg'
}