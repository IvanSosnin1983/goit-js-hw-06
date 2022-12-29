const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');
// console.dir(list);
// const test = images.map(obj => {
//   console.log(obj.url);
//   console.log(obj.alt);
// });

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="list-item">
      <img src="${url}" alt="${alt}"  width = 300px class="image">
      </li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);
list.style.display = 'flex';
list.style.alignItems = 'center';
list.style.justifyContent = 'space-between';
list.style.listStyle = 'none';
list.style.padding = '20px';
list.style.paddingRight = '50px';
list.style.paddingLeft = '50px';
