// window.addEventListener("load", function () {
let form = document.querySelector(".prodForm");
console.log(form.elements);

form.addEventListener("submit", function (event) {
  //   event.preventDefault();

  let errores = [];

  let { nombre, descripcion, imagen, precio, descuento } = form.elements;

  if (nombre.value.length < 5) {
    errores.push("El nombre del producto debe tener al menos 5 caracteres");
    // nombre.classList.remove("is-valid-campo-input");
    nombre.classList.add("is-invalid-campo-input");
    console.log(nombre.value);
  } else {
    nombre.classList.remove("is-invalid-campo-input");
    nombre.classList.add("is-valid-campo-input");
  }
  if (descripcion.value.length < 20) {
    errores.push("La descripcion debe tener al menos 20 caracteres");
    // nombre.classList.remove("is-valid-campo-input");
    descripcion.classList.add("is-invalid-campo-input");
  } else {
    descripcion.classList.remove("is-invalid-campo-input");
    descripcion.classList.add("is-valid-campo-input");
  }

  if (imagen.value == "") {
    errores.push(
      "Debes seleccionar una imagen de producto (.jpg, .jpeg, .png, .gif)"
    );
    // nombre.classList.remove("is-valid-campo-input");
    imagen.classList.add("is-invalid-campo-input");
  } else {
    imagen.classList.remove("is-invalid-campo-input");
    imagen.classList.add("is-valid-campo-input");
  }

  if (precio.value == "") {
    errores.push("Debes ingresar un valor para el precio");
    // nombre.classList.remove("is-valid-campo-input");
    precio.classList.add("is-invalid-campo-input");
  } else {
    precio.classList.remove("is-invalid-campo-input");
    precio.classList.add("is-valid-campo-input");
  }
  if (descuento.value == "") {
    errores.push("Debes ingresar un valor de descuento");
    // nombre.classList.remove("is-valid-campo-input");
    descuento.classList.add("is-invalid-campo-input");
  } else {
    descuento.classList.remove("is-invalid-campo-input");
    descuento.classList.add("is-valid-campo-input");
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
// });
