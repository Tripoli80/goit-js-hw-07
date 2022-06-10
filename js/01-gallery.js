import { galleryItems } from "./gallery-items.js";
// get link gallery
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openItem);
// window.addEventListener("keydown", removebasicLightbox);
//generate all item
const galeryObjectHtml = function createGalery(images) {
  return images.map(createItemGalery);
};

//create item
function createItemGalery(im) {
  const { preview, original, description } = im;
  const item = document.createElement("div");
  const link = document.createElement("a");
  const image = document.createElement("img");

  item.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  link.href = original;
  image.src = preview;
  image.dataset.source = original;
  image.alt = description;

  link.append(image);
  item.append(link);
  return item;
}

function openItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src=${e.target.src} width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
}

//added o html
gallery.append(...galeryObjectHtml(galleryItems));

//  galleryItems и предоставленному шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
