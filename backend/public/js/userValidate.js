let form = document.querySelector(".userForm");
console.log(form.elements);

form.addEventListener("submit", function (event) {
  // event.preventDefault();

  let errores = [];

  let {
    nombre,
    apellido,
    codigo_pais,
    telefono,
    avatar,
    email,
    password,
    confPassword,
  } = form.elements;

  if (nombre.value.length < 2) {
    errores.push("El nombre debe tener al menos 2 caracteres");
    nombre.classList.add("is-invalid-campo-input");
  } else {
    nombre.classList.remove("is-invalid-campo-input");
    nombre.classList.add("is-valid-campo-input");
  }
  if (apellido.value.length < 2) {
    errores.push("El apellido debe tener al menos 2 caracteres");
    apellido.classList.add("is-invalid-campo-input");
  } else {
    apellido.classList.remove("is-invalid-campo-input");
    apellido.classList.add("is-valid-campo-input");
  }
  if (codigo_pais.value == "") {
    errores.push("El código pais debe ser un numero válido");
    codigo_pais.classList.add("is-invalid-codigo-pais");
  } else {
    codigo_pais.classList.remove("is-invalid-codigo-pais");
    codigo_pais.classList.add("is-valid-codigo-pais");
  }

  if (telefono.value == "") {
    errores.push("El teléfono debe ser un numero válido");
    telefono.classList.add("is-invalid-nro-telefono");
  } else {
    telefono.classList.remove("is-invalid-nro-telefono");
    telefono.classList.add("is-valid-nro-telefono");
  }

  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email.value)) {
    errores.push("El email debe email debe tener un formato válido");
    email.classList.add("is-invalid-campo-input");
  } else {
    email.classList.remove("is-invalid-campo-input");
    email.classList.add("is-valid-campo-input");
  }

  let passwordOk = true;
  let regPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!regPassword.test(password.value)) {
    errores.push(
      "La contraseña debe tener 8 caracteres mínimo, con mayuscula, numero y caracter especial"
    );
    passwordOk = false;
    password.classList.add("is-invalid-campo-input");
  } else {
    password.classList.remove("is-invalid-campo-input");
    password.classList.add("is-valid-campo-input");
  }

  if (confPassword.value != password.value) {
    errores.push("Debes confirmar la misma contraseña ingresada");
    confPassword.classList.add("is-invalid-campo-input");
  } else if (!passwordOk) {
    confPassword.classList.remove("is-valid-campo-input");
    confPassword.classList.add("is-invalid-campo-input");
  } else {
    confPassword.classList.remove("is-invalid-campo-input");
    confPassword.classList.add("is-valid-campo-input");
  }

  if (avatar.value == "") {
    errores.push(
      "Debes seleccionar una imagen de perfil (.jpg, .jpeg, .png, .gif)"
    );
    avatar.classList.add("is-invalid-campo-input");
  } else {
    avatar.classList.remove("is-invalid-campo-input");
    avatar.classList.add("is-valid-campo-input");
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
