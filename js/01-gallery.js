import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'


console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

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


galleryList.insertAdjacentHTML('beforeend', markup)
galleryList.addEventListener('click', openImage)

function openImage (evt){
   evt.preventDefault();  
   let url = evt.target.dataset.source;
   
   const instance = basicLightbox.create(`<img width="1280"  src="${url}">`)
   instance.show();


   
}

