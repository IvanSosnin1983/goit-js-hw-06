const listElItem = document.querySelectorAll('.item');
console.log('Categories: ', listElItem.length);

listElItem.forEach(item => {
  //   console.log(item);
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});
