document.addEventListener("DOMContentLoaded", () => {
  const menuToggler = document.querySelector(".menu-toggler");
  const navMenu = document.querySelector(".nav-menu");

  menuToggler.classList.toggle("active");
  navMenu.classList.toggle("active");

  menuToggler.addEventListener("click", () => {
    menuToggler.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});

// Muda dinâmicamente a idade da seção sobre mim
const getAge = () => {
  // 1. Pega o ID que pertence especificamente a idade da seção sobre mim
  const ageID = document.getElementById("age");

  // 2. Declara o dia, mes e ano de nascimento
  const yearOfBirth = 1997;
  const monthOfBirth = 2;
  const dayOfBirth = 6;
  // 3. Cria um novo objeto de data e atribui em `currentDate`
  const currentDate = new Date();
  // 4. Com o objeto criado, declara o dia, mes e ano atual.
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  // 5. Faz o calculo de idade, subtraindo o ano atual do ano de nascimento
  let age = currentYear - yearOfBirth;

  /*
    6. Verifica se o mês atual é menor que o mês de nascimento (através de Indice) e se o dia atual é menor que o dia de nascimento, e se isso acontecer, tira 1 da idade (pois ela já está com o calculo cheio)*/
  if (
    currentMonth < monthOfBirth ||
    (currentMonth === monthOfBirth && currentDay < dayOfBirth)
  ) {
    age--;
  }

  // 7. Pega a idade calculada e verificada e coloca no ID da página, através do textContent.
  ageID.textContent = age;
};

getAge();

function addRecommendation() {
  // Pega a mensagem da recomendação
  let recommendation = document.getElementById("new_recommendation");
  let nameRecommendation = document.getElementById("recommendation-name");

  if (!recommendation || recommendation.value.trim() === "") {
    alert("Se quiser recomendar, digite um texto");
    showPopup(false);
    return;
  }

  const nameFilled = nameRecommendation ? nameRecommendation.value.trim() : "";

  const htmlName = nameFilled
    ? `<span class="recommendation-name">- ${nameFilled}</span>`
    : "";

  articleElement = document.createElement("article");
  articleElement.setAttribute("class", "recommendation-item");

  articleElement.innerHTML = `

    <span class="recommendation-item__quote">&#8220;</span>
    <p class="recommendation-item__text">
     ${recommendation.value}          
    </p>
    <span class="recommendation-item__quote-end">&#8221;</span>
    ${htmlName} 
  `;

  showPopup(true);

  document.getElementById("all_recommendations").appendChild(articleElement);

  recommendation.value = "";
}

function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}
