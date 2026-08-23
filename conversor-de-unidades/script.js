/*

A lógica é a mesma para cada uma das funções de conversão.

Basicamente: 
1. Pega o valor digitado no campo que será convertido (celsius, kg ou km)
2. Verifica se o campo está vazio e emite um alerta
3. Se estiver tudo certo faz a conversão para a medida desejada (fahrenheit, libras ou milhas)
4. Exibe o resultado no campo do valor convertido

*/

function temperature() {
  var celsius = document.getElementById("celsius").value;

  if (!celsius) {
    alert("Digite a temperatura em Celsius");
    celsius.focus();
  }
  var fahrenheit = (celsius * 9) / 5 + 32;

  document.getElementById("fahrenheit").value = fahrenheit;
}

function weight() {
  var kilos = document.getElementById("kilo").value;

  if (!kilos) {
    alert("Digite o valor em KGs");
    kilos.focus();
  }
  var pounds = kilos * 2.2;

  document.getElementById("pound").value = pounds;
}

function distance() {
  var kms = document.getElementById("km").value;

  if (!kms) {
    alert("Digite o valor em KMs");
    kms.focus();
  }
  var miles = kms * 0.62137;

  document.getElementById("miles").value = miles;
}
