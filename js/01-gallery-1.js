import { galleryItems } from "./gallery-items.js";
// get link gallery
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openItem);

//added to html
gallery.innerHTML = galleryItems.map(createItemGalery).join("");

//create item
function createItemGalery({
  preview: previewLink,
  original: originalLink,
  description: descriptionImage,
}) {
  return `<div class="gallery__item"><a class="gallery__link" href= ${originalLink}> <img class="gallery__image" src=${previewLink} data-source=${originalLink} alt=${descriptionImage}/></a></div>`;
}

function openItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${e.target.src} class ="gallery__image-big" >`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key.toLocaleLowerCase() === "Escape".toLocaleLowerCase()) {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
}
//  galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
