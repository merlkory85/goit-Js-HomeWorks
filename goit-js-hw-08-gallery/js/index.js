import gallery from './gallery-items.js';

const galleryItemsList = document.querySelector('.js-gallery');
const imgRef = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const imagesItems = gallery.map(arr => {
	const li = document.createElement('li'),
		link = document.createElement('a'),
		img = document.createElement('img');
	li.classList.add('gallery__item');
	link.classList.add('gallery__link');
	link.classList.add('href', arr.original);
	img.classList.add('gallery__image');
	img.setAttribute('src', arr.preview);
	img.setAttribute('data-source', arr.original);
	img.setAttribute('alt', arr.description);
	link.appendChild(img);
	li.appendChild(link);
	return li;
});

galleryItemsList.append(...imagesItems);
galleryItemsList.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
	if (event.target.nodeName !== 'IMG') return;
	else {
		overlay.classList.add('is-open');
		imgRef.src = event.target.getAttribute('data-source');
	}
}

closeModalBtn.addEventListener('click', () => {
	overlay.classList.remove('is-open');
});

console.log(closeModalBtn);
