import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", clickOnItem);

//added to html
gallery.innerHTML = galleryItems.map(createItemGalery).join("");

//create item
function createItemGalery({
  preview: previewLink,
  original: originalLink,
  description: descriptionImage,
}) {
  return `<a class="gallery__item" href=${originalLink}>
  <img class="gallery__image" src=${previewLink} alt=${descriptionImage} />
</a> `;
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  showCounter: false,
  captions: true,
});

function clickOnItem(e) {
  e.preventDefault();
}
