 (function() {
      // Inicializar EmailJS
      emailjs.init("NW7CaQH59piyewqDP"); // Cambia por tu Public Key (antes se llamaba user_id)
    })();

    // Escuchar el envío del formulario
    document.getElementById('form-contacto').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que recargue la página

      emailjs.sendForm('service_o119cno', 'template_9dtszwa', this)
        .then(() => {
          alert('Correo enviado correctamente');
          this.reset();
        }, (error) => {
          console.error('Error:', error);
          alert('Hubo un problema al enviar el correo');
        });
    });