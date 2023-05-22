function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var confirContrasena = document.getElementById('confirContrasena').value;
    var telefono = document.getElementById('telefono').value;
    var direccionEnvio = document.getElementById('direccionEnvio').value;
    
    // Expresión regular para validar el formato de correo electrónico
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Expresión regular para validar la contraseña (al menos 6 caracteres)
    var formatoContrasena = /^.{6,}$/;
    
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
    
    // Validación de la dirección de envío
    if (direccionEnvio.trim() === '') {
      alert('Por favor, ingresa tu dirección de envío.');
      return false;
    }
    
    // Envío del formulario si todas las validaciones son exitosas
    alert('Registro exitoso!');
    return true;
  }
  
  function mostrarContrasena() {
    var inputContrasena = document.getElementById('contrasena');
    var inputConfirContrasena = document.getElementById('confirContrasena');

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
  