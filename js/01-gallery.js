import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const elements = [];

galleryItems.forEach((element) => {
  const itemGallery = document.createElement("div");
  itemGallery.classList.add("gallery__item");

  const linkGallery = document.createElement("a");
  linkGallery.classList.add("gallery__link");
  linkGallery.href = element.original;

  const imgGallery = document.createElement("img");
  imgGallery.classList.add("gallery__image");
  imgGallery.src = element.preview;
  imgGallery.setAttribute("data-source", element.original);
  imgGallery.alt = element.description;

  itemGallery.append(linkGallery);
  linkGallery.append(imgGallery);
  elements.push(itemGallery);
});
galleryRef.append(...elements);

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${e.target.getAttribute(
      "data-source"
    )}">
`);

  instance.show();

  galleryRef.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
});
