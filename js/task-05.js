const input = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');
input.addEventListener('input', event => {
  if (event.currentTarget.value !== '') {
    spanText.textContent = event.currentTarget.value;
  } else {
    spanText.textContent = 'Anonymous';
  }
});
