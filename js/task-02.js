const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const liEl = ingredients.map(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  li.classList = 'item';
  console.log(li);
  return li;
});
console.dir(liEl);
const ulEl = document.querySelector('#ingredients');
console.dir(ulEl);
ulEl.append(...liEl);
