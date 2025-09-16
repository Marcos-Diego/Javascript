const botao = document.getElementById('nova-citacao-btn');
botao.addEventListener('click', click);

const lista = [
"1. Esse curso se tornou um inferno",
"2. Mas eu vou finalizalo",
"3. Assim irei me tornarei um bom proficional",
"4. Poderei criar tudo o que eu quiser",
"5. Tudo o que eu imaginar..."];


function click () {
 const resultado = Math.floor(Math.random() * lista.length);
 let citacao = lista[resultado];
 document.getElementById("citacao-texto").innerHTML = citacao;
};

/*
let numero = function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
}

function click () {
 lista.length = numero(1, maximo);
 document.getElementById("none").innerHTML = lista;
 let citacao = document.getElementById("none").lastChild.innerHTML;
 document.getElementById("citacao-texto").innerHTML = citacao;
}


/*
function click() {
    var valor = numero(1, maximo);
    if (valor === 1){
        document.getElementById("citacao-texto").innerHTML = 'Esse curso se tornou um inferno';
    } else if (valor === 2) {
        document.getElementById("citacao-texto").innerHTML = 'Mas eu vou finalizalo';
    } else if (valor === 3) {
        document.getElementById("citacao-texto").innerHTML = 'Assim irei me tornarei um bom proficional';
    } else if (valor === 4) {
        document.getElementById("citacao-texto").innerHTML = 'Poderei criar tudo o que eu quiser';
    } else {
        document.getElementById("citacao-texto").innerHTML = 'Tudo o que eu imaginar...';
    }
}; */
