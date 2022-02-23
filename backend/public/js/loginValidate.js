let form = document.querySelector(".loginForm");
console.log(form.elements);

form.addEventListener("submit", function (event) {
  let errores = [];

  let { email, password } = form.elements;

  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email.value)) {
    errores.push("El email debe email debe tener un formato válido");
    email.classList.add("is-invalid-campo-input");
  } else {
    email.classList.remove("is-invalid-campo-input");
    email.classList.add("is-valid-campo-input");
  }
  let regPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!regPassword.test(password.value)) {
    errores.push(
      "La contraseña debe tener 8 caracteres mínimo, con mayuscula, numero y caracter especial"
    );
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
