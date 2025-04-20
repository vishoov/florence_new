
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      emailjs.sendForm('service_m1xxj92', 'template_qepq3uc', this)
        .then(function(response) {
          // console.log('SUCCESS!', response.status, response.text);
          alert('You will recieve a response from Florence Stone Concepts Team shortly!');
        }, function(error) {
          // console.log('FAILED...', error);
          alert('Failed to send your message. Please try again.');
        });
    });
  };

