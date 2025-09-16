const botaoI = document.getElementById("increase");
botaoI.addEventListener("click", clickI);

const botaoD = document.getElementById("decrease");
botaoD.addEventListener("click", clickD);

let clicks = document.getElementById("value").innerText;
clicks = Number(clicks);

function clickI () {
    clicks = clicks + 1;
    document.getElementById("value").innerHTML = clicks;
};

function clickD () {
    clicks = clicks - 1;
    document.getElementById("value").innerHTML = clicks;
};
