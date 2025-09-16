const nome = document.getElementById("username");
nome.addEventListener("keyup", InputNome);
const senha = document.getElementById("password");
senha.addEventListener("keyup", InputSenha);
const confirmar = document.getElementById("signup-form");
confirmar.addEventListener("submit", confirma);

const parent = nome.parentElement.classList;
const parent1 = senha.parentElement.classList;

let Okkey;
let OkName;

let name;
let key;

function InputNome() {
    name = nome.value;
    if (name.length >= 3) {
        parent.remove("error");
        parent.add("success");
        OkName = "true"
    } else {
        parent.add("error")
    }
};

function InputSenha() {
     key = senha.value;
    if (key.length >= 8) {
        parent1.remove("error");
        parent1.add("success");
        Okkey = "true"
    } else {
        parent1.add("error")
    };
};

function confirma(event) {
    event.preventDefault();
    
    if (OkName === "true") {
        if (Okkey === "true") {
            console.log(`Nome:${name}           Senha:${key}`);
        } else {
             parent1.add("error");
        };


    } else if (Okkey === "true") {
        parent.add("error");


    } else {
        parent.add("error");
        parent1.add("error");
    };
};