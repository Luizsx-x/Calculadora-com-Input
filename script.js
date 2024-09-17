function calcular() {
    var valorUm = document.getElementById('valorUm').value;
    var valorDois = document.getElementById('valorDois').value;
    
    if (valorUm == "" || valorDois == "") {
        alert("Insira valores!");
        return;
    }

    valorUm = parseInt(valorUm);
    valorDois = parseInt(valorDois);
    var selecionado = document.getElementById('operacoes');
	var valor = selecionado.options[selecionado.selectedIndex].text;
    var result;

    if (valor == "Adição") {
        result = valorUm + valorDois;
        document.getElementById('resultado').innerHTML = result;
    } else if (valor == "Subtração") {
        result = valorUm - valorDois;
        document.getElementById('resultado').innerHTML = result;
    } else if (valor == "Divisão") {
        result = valorUm / valorDois;
        document.getElementById('resultado').innerHTML = result;
    } else {
        result = valorUm * valorDois;
        document.getElementById('resultado').innerHTML = result;
    }
    
}

function limpar() {
    document.getElementById('valorUm').value = "";
    document.getElementById('valorDois').value = "";
    document.getElementById('resultado').innerHTML = "";
}