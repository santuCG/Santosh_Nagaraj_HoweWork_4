document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('first-name').value.trim();
    const matriculation = document.getElementById('matriculation').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value;
    const startDate = document.getElementById('start-date').value;

    document.getElementById('firstName').addEventListener('input', function () {
      const namePattern = /^[A-Za-z]*$/; // Allows only alphabetic characters
      const firstNameError = document.getElementById('firstNameError');
     
      if (!namePattern.test(this.value)) {
        firstNameError.style.display = 'inline';
      } else {
        firstNameError.style.display = 'none';
      }
    });
   
    document.getElementById('lastName').addEventListener('input', function () {
      const namePattern = /^[A-Za-z]*$/; // Allows only alphabetic characters
      const lastNameError = document.getElementById('lastNameError');
     
      if (!namePattern.test(this.value)) {
        lastNameError.style.display = 'inline';
      } else {
        lastNameError.style.display = 'none';
      }
    });
   
   
    document.getElementById('matriculation').addEventListener('input', function () {
      const matriculationPattern = /^\d+$/;  // Only digits allowed
      const matriculationPatternError = document.getElementById('matriculationPatternError');
     
      // Show error only if the input contains non-numeric characters
      if (this.value !== '' && !matriculationPattern.test(this.value)) {
        matriculationPatternError.style.display = 'inline';
      } else {
        matriculationPatternError.style.display = 'none';
      }
    });
   
    document.getElementById('email').addEventListener('input', function () {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
      const emailPatternError = document.getElementById('emailPattern');
     
      // Show error only if the input contains an invalid email format
      if (this.value !== '' && !emailPattern.test(this.value)) {
        emailPatternError.style.display = 'inline';
      } else {
        emailPatternError.style.display = 'none';
      }
    });
   
   

    // Clear previous error messages
    document.querySelectorAll('.error').forEach((error) => (error.textContent = ''));

    let isValid = true;

    // Name validation
    if (!/^[A-Za-z]+$/.test(name)) {
      document.getElementById('name-error').textContent = 'Name must contain only alphabetic characters.';
      isValid = false;
    }

    // Matriculation validation
    if (!/^\d+$/.test(matriculation)) {
      document.getElementById('matriculation-error').textContent = 'Matriculation must contain only digits.';
      isValid = false;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Country validation
    if (!country) {
      document.getElementById('country-error').textContent = 'Please select your country.';
      isValid = false;
    }

    // Start date validation
    if (!startDate) {
      document.getElementById('start-date-error').textContent = 'Please select a start date.';
      isValid = false;
    }

    // If all validations pass
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
});
