function updateRate() {
  var rateVal = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateVal}%`;
}

const calculate = () => {
  // Declara valores constantes para capital, taxa e tempo, pegando as respectivas ids
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("time").value;
  const principalError = document.getElementById("principalError");
  const timeError = document.getElementById("timeError");

  event.preventDefault();

  if (principal == "") {
    principalError.textContent = "Esse campo é obrigatório!";
    return;
  } else {
    principalError.textContent = "";
  }

  if (years == "") {
    timeError.textContent = "Esse campo é obrigatório!";
    return;
  } else {
    timeError.textContent = "";
  }

  var interest = (principal * years * rate) / 100;

  var year = new Date().getFullYear() + parseInt(years);

  var amount = parseInt(principal) + parseFloat(interest);

  var result = document.getElementById("result");

  if (principal <= 0) {
    alert("Digite um valor positivo");
    document.getElementById("principal").focus();

    return;
  }

  if (years <= 0 || years > 10) {
    alert("Por favor digite entre 1 e 10");
    document.getElementById("years").focus();
    return;
  }

  result.innerHTML = `<h3>Projeção de Crescimento</h3> <p>
    Se você depositar R$ <mark>${principal},00</mark>,
  a uma taxa de juros de <mark>${rate}% a.a.</mark>,
  você receberá uma quantia de R$ <mark>${amount},00</mark>
  no ano de <mark>${year}</mark>.

  </p>`;
};
