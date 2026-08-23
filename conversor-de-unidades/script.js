function temperature() {
  var celsius = document.getElementById("celsius").value;
  var fahrenheit = (celsius * 9) / 5 + 32;

  if (!celsius) {
    alert("Digite a temperatura em Celsius");
  }

  document.getElementById("fahrenheit").value = fahrenheit;
}

function weight() {
  var kilos = document.getElementById("kilo").value;
  var pounds = kilos * 2.2;

  if (!kilos) {
    alert("Digite o valor em KGs");
  }

  document.getElementById("pound").value = pounds;
}

function distance() {
  var kms = document.getElementById("km").value;
  var miles = kms * 0.62137;

  if (!kms) {
    alert("Digite o valor em KMs");
  }

  document.getElementById("miles").value = miles;
}
