document.getElementById('contactForm').addEventListener('submit', function(event) {
     event.preventDefault();

     const fullName = document.getElementById('fullName').value;
     const email = document.getElementById('email').value;
     const query = document.getElementById('query').value;
     const message = document.getElementById('message').value;

     if (fullName && email && query && message) {
         alert(`Thank you, ${fullName}! Your message has been sent successfully.`);
         document.getElementById('contactForm').reset();
     } else {
         alert('Please fill in all fields before submitting.');
     }
});