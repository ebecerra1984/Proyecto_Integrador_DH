let form = document.querySelector(".loginForm");
console.log(form.elements);

form.addEventListener("submit", function (event) {
  let errores = [];

  let { email, password } = form.elements;

  if (email.value == "") {
    errores.push("Debes ingresar un email valido");
    // nombre.classList.remove("is-valid-campo-input");
    email.classList.add("is-invalid-campo-input");
  } else {
    email.classList.remove("is-invalid-campo-input");
    email.classList.add("is-valid-campo-input");
  }
  if (password.value == "") {
    errores.push("Debes ingresar una contraseña");
    // nombre.classList.remove("is-valid-campo-input");
    password.classList.add("is-invalid-campo-input");
  } else {
    password.classList.remove("is-invalid-campo-input");
    password.classList.add("is-valid-campo-input");
  }
  let erroresUL = document.getElementById("erroresFront");

  erroresUL.classList.add("erroresFront");
  if (errores.length > 0) {
    event.preventDefault();
    erroresUL.innerHTML = "";
    for (let i = 0; i < errores.length; i++) {
      erroresUL.innerHTML += `<li> ${errores[i]} </li> `;
    }
    errores = [];
  } else {
    return true;
  }
});
