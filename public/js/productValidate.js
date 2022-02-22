let form = document.querySelector(".prodForm");

form.addEventListener("submit", function (event) {
  let errores = [];

  let { nombre, descripcion, imagen, precio, descuento } = form.elements;

  if (nombre.value.length < 5) {
    errores.push("El nombre del producto debe tener al menos 5 caracteres");
    nombre.className = "is-invalid-campo-input";
  } else {
    nombre.classList.remove("is-invalid-campo-input");
    nombre.className = "is-valid-campo-input";
  }
  if (descripcion.value.length < 20) {
    errores.push("La descripcion debe tener al menos 20 caracteres");
    descripcion.className = "is-invalid-campo-input";
  } else {
    descripcion.classList.remove("is-invalid-campo-input");
    descripcion.className = "is-valid-campo-input";
  }

  if (imagen.value == "") {
    errores.push(
      "Debes seleccionar una imagen de producto (.jpg, .jpeg, .png, .gif)"
    );
    imagen.className = "is-invalid-campo-input";
  } else {
    imagen.classList.remove("is-invalid-campo-input");
    imagen.className = "is-valid-campo-input";
  }

  if (precio.value == "") {
    errores.push("Debes ingresar un valor para el precio");
    precio.className = "is-invalid-campo-input";
  } else {
    precio.classList.remove("is-invalid-campo-input");
    precio.className = "is-valid-campo-input";
  }
  if (descuento.value == "") {
    errores.push("Debes ingresar un valor de descuento");
    descuento.className = "is-invalid-campo-input";
  } else {
    descuento.classList.remove("is-invalid-campo-input");
    descuento.className = "is-valid-campo-input";
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
