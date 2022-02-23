window.addEventListener("load", function () {
let form = document.querySelector(".prodEditForm");
console.log(form.elements);

form.addEventListener("submit", function (event) {
  //event.preventDefault();

  let errores = [];

  let { name, description, category, newCategory,  price, discount } = form.elements;

  if (name.value.length < 5) {
    errores.push("El nombre del producto debe tener al menos 5 caracteres");
    // name.classList.remove("is-valid-campo-input");
    name.classList.add("is-invalid-campo-input");
    console.log(name.value);
  } else {
    name.classList.remove("is-invalid-campo-input");
    name.classList.add("is-valid-campo-input");
  }
  if (description.value.length < 20) {
    errores.push("La descripcion debe tener al menos 20 caracteres");
    // description.classList.remove("is-valid-campo-input");
    description.classList.add("is-invalid-campo-input");
  } else {
    description.classList.remove("is-invalid-campo-input");
    description.classList.add("is-valid-campo-input");
  }
  if (newCategory.value =="Seleccione nueva") {
    errores.push("La nueva categoría no fue seleccionada");
    // description.classList.remove("is-valid-campo-input");
    newCategory.classList.add("is-invalid-newCategory");
  } else {
    newCategory.classList.remove("is-invalid-newCategory");
    newCategory.classList.add("is-valid-newCategory");
  }


  // if (image.value == "") {
  //   errores.push(
  //     "Debes seleccionar una imagen de producto (.jpg, .jpeg, .png, .gif)"
  //   );
  //   // image.classList.remove("is-valid-campo-input");
  //   image.classList.add("is-invalid-campo-input");
  // } else {
  //   image.classList.remove("is-invalid-campo-input");
  //   image.classList.add("is-valid-campo-input");
  // }

  if (price.value == "") {
    errores.push("Debes ingresar un valor para el precio");
    // price.classList.remove("is-valid-campo-input");
    price.classList.add("is-invalid-campo-input");
  } else {
    price.classList.remove("is-invalid-campo-input");
    price.classList.add("is-valid-campo-input");
  }
  if (discount.value == "") {
    errores.push("Debes ingresar un valor de descuento");
    // discount.classList.remove("is-valid-campo-input");
    discount.classList.add("is-invalid-campo-input");
  } else {
    discount.classList.remove("is-invalid-campo-input");
    discount.classList.add("is-valid-campo-input");
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
});
