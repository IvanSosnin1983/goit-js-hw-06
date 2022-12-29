function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createRef = document.querySelector('button[data-create]');
const destroyRef = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
const size = 30;

// console.log(createRef);

createRef.addEventListener('click', createBoxes);
function createBoxes(amount) {
  amount = Number(inputRef.value);
  console.log(amount);
  for (let index = 0; index < amount; index += 1) {
    const divs = document.createElement('div');
    divs.style.width = `${size + index * 10}px`;
    divs.style.height = `${size + index * 10}px`;
    divs.style.backgroundColor = getRandomHexColor();
    box.append(divs);
  }
}

destroyRef.addEventListener('click', () => {
  inputRef.value = '';
  box.innerHTML = '';
});
