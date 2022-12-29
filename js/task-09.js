function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

buttonRef.addEventListener('click', event => {
  const colorHex = getRandomHexColor();
  bodyRef.style.backgroundColor = colorHex;
  spanRef.textContent = colorHex;
});
