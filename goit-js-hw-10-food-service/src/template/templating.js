import itemsTemplate from '../template/gallery-item.hbs';
import listDishes from '../menu.json';
import '../styles.css';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(listDishes);
galleryRef.insertAdjacentHTML('beforeend', markup);
