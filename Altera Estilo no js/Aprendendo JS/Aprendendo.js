
function soma(num1, num2) {
    return num1 + num2;
}

function subtrai(num1, num2) {
  return num1 - num2;
}

function calcularOperacao(funcao1, num1, num2, funcao2)
{
  console.log("Soma: ", funcao1(num1, num2))
  console.log("Subtracao: ", funcao2(num1, num2))
}

calcularOperacao(soma, 7, 3, subtrai);


