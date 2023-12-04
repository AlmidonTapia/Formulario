const image = document.querySelector("img");
const input = document.getElementById("profile-imagen");
input.addEventListener("change", () => {
  image.src = URL.createObjectURL(input.files[0]);
});

// Obtener los elementos del formulario
const formulario = document.querySelector('.card-login');
const nombreInput = formulario.querySelector('input[name="usuario"]');
const emailInput = formulario.querySelector('input[type="email"]');
const telefonoInput = formulario.querySelector('input[name="telefono"]');
const contrasenaInput = formulario.querySelector('input[name="contrasena"]');

// Expresiones regulares para validar los campos
const nombreRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^\d{10}$/;
const contrasenaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Función para mostrar un mensaje de error
function mostrarError(input, mensaje) {
  const divError = document.createElement('div');
  divError.classList.add('error');
  divError.textContent = mensaje;
  input.parentNode.insertBefore(divError, input.nextSibling);
  alert(mensaje);
}

// Función para validar el formulario
function validarFormulario(event) {
  event.preventDefault();

  // Limpiar mensajes de error anteriores
  const errores = formulario.querySelectorAll('.error');
  errores.forEach((error) => error.remove());

  // Validar nombre
  if (!nombreRegex.test(nombreInput.value.trim())) {
    mostrarError(nombreInput, 'Ingrese un nombre válido');
  }

  // Validar email
  if (!emailRegex.test(emailInput.value.trim())) {
    mostrarError(emailInput, 'Ingrese un correo electrónico válido');
  }

  // Validar teléfono
  if (!telefonoRegex.test(telefonoInput.value.trim())) {
    mostrarError(telefonoInput, 'Ingrese un número de teléfono válido');
  }

  // Validar contraseña
  if (!contrasenaRegex.test(contrasenaInput.value)) {
    mostrarError(
      contrasenaInput,
      'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número'
    );
  }
}

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', validarFormulario);
