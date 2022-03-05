import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const imageGallery = document.querySelector('.gallery');
renderGallery();


imageGallery.addEventListener("click", clickOnGalleryItems);

function renderGallery() {
    const markup = galleryItems.map(image => `
    <div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
    />
  </a>
</div>
    `)
        .join('');
    imageGallery.insertAdjacentHTML('beforeend', markup);
}

function clickOnGalleryItems(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    createModal(event.target.dataset.source)
}
function createModal(src) {
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${src}" width="800" height ="600">
    </div>
`)
    instance.show()
}

