const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue inmediatamente

    // Crear objeto FormData con los campos del formulario
    const formData = new FormData(form);

    // Mostrar mensaje de cargando
    Swal.fire({
      title: 'Enviando...',
      text: 'Por favor espera un momento',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Petición AJAX a tu script PHP
    fetch('php/enviar.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Alerta de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: 'Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.',
        confirmButtonColor: '#ff5e28'
      }).then(() => {
        form.reset(); // Limpia los campos del formulario
      });
    })
    .catch(error => {
      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
        confirmButtonColor: '#ff5e28'
      });
    });
  });