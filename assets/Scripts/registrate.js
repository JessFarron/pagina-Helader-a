

const validarFormulario = () => {
  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let contrasena = document.getElementById('contrasena').value;
  let confirContrasena = document.getElementById('confirContrasena').value;
  let telefono = document.getElementById('telefono').value;
  let direccionEnvio = document.getElementById('direccionEnvio').value;

  // Expresión regular para validar el formato de correo electrónico
  let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Expresión regular para validar la contraseña (al menos 6 caracteres)
  let formatoContrasena = /^.{6,}$/;

  // Validación del nombre
  if (nombre.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    return false;
  }

  // Validación del correo electrónico
  if (!formatoCorreo.test(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return false;
  }

  // Validación de la contraseña
  if (!formatoContrasena.test(contrasena)) {
    alert('Por favor, ingresa una contraseña de al menos 6 caracteres.');
    return false;
  }

  // Validación de la confirmación de contraseña
  if (contrasena !== confirContrasena) {
    alert('Las contraseñas no coinciden. Por favor, verifica.');
    return false;
  }

  // Validación del teléfono
  if (telefono.trim() === '') {
    alert('Por favor, ingresa tu número de teléfono.');
    return false;
  }

  // Validación del número de teléfono (10 dígitos)
  if (telefono.length !== 10 || !(/^\d+$/.test(telefono))) {
    alert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
    return false;
  }

  // Validación de la dirección de envío
  if (direccionEnvio.trim() === '') {
    alert('Por favor, ingresa tu dirección de envío.');
    return false;
  }
  return true;
}

const datosRegistro = [];

const guardarDatos = (event) => {
  if (validarFormulario()) {
    alert("Registro exitoso");
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;

    // Crear un objeto con los datos a guardar
    const datos = {
      nombre: nombre,
      correo: correo,
      telefono: telefono
    };
    datosRegistro.push(datos);
    console.log(datosRegistro);
    // Guardar los datos en el localStorage como una cadena JSON
    localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro));
  }
}

function mostrarContrasena() {
  let inputContrasena = document.getElementById('contrasena');
  let inputConfirContrasena = document.getElementById('confirContrasena');

  if (inputContrasena.type === 'password') {
    inputContrasena.type = 'text';
  } else {
    inputContrasena.type = 'password';
  }

  if (inputConfirContrasena.type === 'password') {
    inputConfirContrasena.type = 'text';
  } else {
    inputConfirContrasena.type = 'password';
  }
}








