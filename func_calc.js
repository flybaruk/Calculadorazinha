var num1 = 0;
var num2 = 0;
op = '';

function pegarnum(num){
    document.getElementById('tela').value += num;
}

function pegarop(operador){
    num1 = parseInt(document.getElementById('tela').value);
    op = operador;
    document.getElementById('tela').value = operador;
}

function limpar(){
    document.getElementById('tela').value = '';
}

function igualdade(){
    num2 = parseInt(document.getElementById('tela').value);
    let resultado = 0;
    if (op == '+') {
        resultado = num1 + num2;
    }
    else if(op == '-'){
        resultado = num1 - num2;
    }
    else if(op == '*'){
        resultado = num1 * num2;
    }
    else if(op == '/'){
        resultado = num1 / num2;
    }
    document.getElementById('tela').value = resultado;
}
