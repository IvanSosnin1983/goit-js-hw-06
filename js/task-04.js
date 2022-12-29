let valueCounter = 0;

function decrement() {
  valueCounter -= 1;
  document.querySelector('#value').textContent = valueCounter;
}

function increment() {
  valueCounter += 1;
  document.querySelector('#value').textContent = valueCounter;
}
const decr = document.querySelector('button[data-action = "decrement"]');

decr.addEventListener('click', decrement);

const incr = document.querySelector('button[data-action = "increment"]');

incr.addEventListener('click', increment);
