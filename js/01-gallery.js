import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
console.log();

const markup = galleryItems.reduce((acc,{
    preview,
    original,
    description})=> 
    acc + `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
   </div>`, '');

console.log ();

galleryList.insertAdjacentHTML('beforeend', markup)
galleryList.addEventListener('click', OpenImage)

function OpenImage (evt){
   evt.preventDefault();  
//    console.dir(evt.target);
   const url = evt.target.dataset.source;
   console.log (url);


}


