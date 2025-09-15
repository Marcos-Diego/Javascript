const botao = document.getElementById("calculate-btn");
botao.addEventListener('click', click);

function click () {
    const bill = document.getElementById("bill");
    const tip = document.getElementById("tip");

    let conta = bill.value;
    let gorgeta = tip.value;
    
    gorgeta = parseFloat(gorgeta) / 100;
    gorgeta = parseFloat(conta) * parseFloat(gorgeta);
    conta = parseFloat(conta) + parseFloat(gorgeta);
    
    document.getElementById("tip-amount").innerHTML = gorgeta;
    document.getElementById("total-amount").innerHTML = conta;
};

/*parseFloat("bill");
    parseFloat("tip")
    tip = Number("tip");
    bill = Number("bill");
    let gorgeta = tip / 100;
    let total = dinheiro * gorgeta;
     document.getElementById("tip-amount").innerHTML = total;*/