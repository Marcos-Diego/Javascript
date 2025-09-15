const botao = document.getElementById("add-task-btn");
botao.addEventListener('click', click);


function click() {
    let tarefa = document.getElementById('new-task-input');
    if (tarefa.value !== "") {
        tarefa = document.getElementById('new-task-input').value;

        const adicionar = document.createElement('li');
        adicionar.textContent = tarefa;

        const lista = document.querySelector('ul');
        lista.appendChild(adicionar);

        document.getElementById('new-task-input').value = ""

        adicionar.addEventListener("click",
            function () {
                adicionar.remove();
            });
    };
};
