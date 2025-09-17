let semaforo = document.getElementById('r');
semaforo.addEventListener("click", lr);

let key = 0; //EXTRA
let error = 1; //EXTRA
let seg = 0; //EXTRA

function lr() {
    document.getElementById("semaforo-img").src = 'img/Luz Vermelha.webp';
    key = 0; //EXTRA
    error = 0; //EXTRA
    seg = 4; //EXTRA
}

semaforo = document.getElementById('y');
semaforo.addEventListener("click", ly);

function ly() {
    document.getElementById("semaforo-img").src = 'img/Luz Amarela.jpg';
    key = 0; //EXTRA
    error = 0; //EXTRA
    seg = 6; //EXTRA
}

semaforo = document.getElementById('g');
semaforo.addEventListener("click", lg);


function lg() {
    document.getElementById("semaforo-img").src = 'img/Luz Verde.jpg';
    key = 0;  //EXTRA
    error = 0; //EXTRA
    seg = 2; //EXTRA
}

// ---------------- Extra ---------------- //
const botao = document.getElementById("auto");
botao.addEventListener("click", click);


function click() {
    key += 1;
    if (key === 1) {
        if (error === 1) {
            error = 1000
            setInterval(time, error);
            function time() {
                if (key > 0) {
                    seg += 1;
                    //console.log(seg);
                    if (seg === 2) {
                        document.getElementById("semaforo-img").src = 'img/Luz Verde.jpg';
                    } else if (seg === 4) {
                        document.getElementById("semaforo-img").src = 'img/Luz Amarela.jpg';
                    } else if (seg === 6) {
                        seg = 0;
                        document.getElementById("semaforo-img").src = 'img/Luz Vermelha.webp';
                    };
                };
            };
        } else {
            error = 1;
        };
    };
};