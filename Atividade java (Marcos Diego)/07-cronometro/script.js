const botaoS = document.getElementById("start-btn");
botaoS.addEventListener("click", start);
const botaoP = document.getElementById("pause-btn");
botaoP.addEventListener("click", pause);
const botaoR = document.getElementById("reset-btn");
botaoR.addEventListener("click", reset);

let seg = 0;
let min = 0;
let startValue = 0;
let intervaloError = 1;

function reset() {
    document.getElementById("timer-display").innerHTML = "00:00";
    seg = 0;
    min = 0;
    startValue = 0;
    intervaloError = 0;
};

function pause() {
    startValue = 0;
    intervaloError = 0;
}


function start() {
    startValue += 1;
    if (startValue === 1) {
        if (intervaloError === 1) {
            intervaloError = 1000
            setInterval(time, intervaloError);
            function time() {
                if (startValue > 0) {
                    seg = Number(seg);
                    seg += 1;
                    if (seg > 59) {
                        seg = 0;
                        min = Number(min)
                        min += 1;
                    };
                    seg += "";
                    seg = seg.padStart(2, "0");
                    min += "";
                    min = min.padStart(2, "0");
                    document.getElementById("timer-display").innerHTML = `${min}:${seg}`;
                    console.log(seg);
                    console.log(startValue)
                };
            };
        } else {
            intervaloError = 1;
        };
    };
};







/*
if (startValue < 2) {
        document.getElementById("erroExit").innerHTML = 1;
        setInterval(time, 1000);
        function time() {
            seg = document.getElementById("timeSeg").textContent;
            seg = Number(seg);
            seg += 1;

            if (seg > 58) {
                document.getElementById("timeSeg").innerHTML = '-1';
            } else if (seg > 58) {
                min = document.getElementById("timeMin").textContent;
                min = Number(min);
                min += 1;
                document.getElementById("timeMin").innerHTML = min;
            };

            min = document.getElementById("timeMin").textContent;
            min = Number(min);

            if (min < 1) {
                document.getElementById("timeSeg").innerHTML = seg;
                seg += "";
                seg = seg.padStart(2, "0");
                document.getElementById("timer-display").innerHTML = `00:${seg}`;
            } else {

                document.getElementById("timeSeg").innerHTML = seg;
                seg += "";
                seg = seg.padStart(2, "0");

                document.getElementById("timeMim").innerHTML = mim;
                min += "";
                min = min.padStart(2, "0");
                document.getElementById("timer-display").innerHTML = `${min}:${seg}`;
            }
        };
    };
};
*/