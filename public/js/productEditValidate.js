let form = document.querySelector(".prodEditForm");

form.addEventListener("submit", function (event) {
  let errores = [];

  let { name, description, category, newCategory, price, discount } =
    form.elements;
  if (name.value.length < 5) {
    errores.push("El nombre del producto debe tener al menos 5 caracteres");
    name.className = "is-invalid-campo-input";
  } else {
    name.className = "is-valid-campo-input";
  }
  if (description.value.length < 20) {
    errores.push("La descripcion debe tener al menos 20 caracteres");
    description.className = "is-invalid-campo-input";
  } else {
    description.className = "is-valid-campo-input";
  }
  if (newCategory.value == "Seleccione nueva") {
    errores.push("La nueva categoría no fue seleccionada");
    newCategory.className = "is-invalid-newCategory";
  } else {
    newCategory.className = "is-valid-newCategory";
  }

  if (price.value == "") {
    errores.push("Debes ingresar un valor para el precio");
    price.className = "is-invalid-campo-input";
  } else {
    price.className = "is-valid-campo-input";
  }
  if (discount.value == "") {
    errores.push("Debes ingresar un valor de descuento");
    discount.className = "is-invalid-campo-input";
  } else {
    discount.className = "is-valid-campo-input";
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
