import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
console.log();

const markup = galleryItems.reduce((acc,{
    preview,
    original,
    description})=> 
    acc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
  </a>`, '');

console.log ();

galleryList.insertAdjacentHTML('beforeend', markup)
galleryList.addEventListener('click', OpenImage)

function OpenImage (evt){
   evt.preventDefault();  
  
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250
  });

}