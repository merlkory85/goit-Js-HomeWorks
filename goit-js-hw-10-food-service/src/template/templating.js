import itemsTemplate from '../template/gallery-item.hbs';
import listDishes from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(listDishes);
galleryRef.insertAdjacentHTML('beforeend', markup);
