const pinInput = document.getElementById('pin-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');

const correctPIN = '0000'; // PIN correcto

submitButton.addEventListener('click', () => {
  const enteredPIN = pinInput.value;
  if (enteredPIN === correctPIN) {
    // Redirige a la página atajo.org/daniel DENTRO del mismo Google Site
    window.location.href = 'atajo.org/daniel';
  } else {
    errorMessage.textContent = 'PIN incorrecto. Intenta de nuevo.';
    pinInput.value = '';
  }
});