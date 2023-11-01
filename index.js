const emailForm = document.getElementById('emailForm');

    emailForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Collect form data
      const email = document.getElementById('email').value;
      

      // Simulate sending the email (replace this with actual server-side code)
      console.log('Simulating email submission:');
      console.log('To:', email);
     emailForm.reset();

      // You'd typically send this data to your server for email processing here
    });
