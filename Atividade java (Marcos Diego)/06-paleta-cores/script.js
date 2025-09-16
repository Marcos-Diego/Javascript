const botao = document.getElementById("change-color-btn");
botao.addEventListener("click", click);


function click () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('color-name').innerHTML = `rgb(${r}, ${g}, ${b})`;
   // document.getElementById('color-name2').innerHTML = g;
   // document.getElementById('color-name3').innerHTML = b;
   // pesquisa talvez?: toString(16)  e  hex.length === 1
};