document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('first-name').value.trim();
    const matriculation = document.getElementById('matriculation').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value;
    const startDate = document.getElementById('start-date').value;

    document.querySelectorAll('.error').forEach((error) => (error.textContent = ''));

    let isValid = true;

    if (!/^[A-Za-z]+$/.test(name)) {
      document.getElementById('name-error').textContent = 'Name must contain only alphabetic characters.';
      isValid = false;
    }

    if (!/^\d+$/.test(matriculation)) {
      document.getElementById('matriculation-error').textContent = 'Matriculation must contain only digits.';
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!country) {
      document.getElementById('country-error').textContent = 'Please select your country.';
      isValid = false;
    }

    if (!startDate) {
      document.getElementById('start-date-error').textContent = 'Please select a start date.';
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
});
