import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const elements = [];

galleryItems.forEach((element) => {
  const itemGallery = document.createElement("li");

  const linkGallery = document.createElement("a");
  linkGallery.classList.add("item");
  linkGallery.href = element.original;

  const imgGallery = document.createElement("img");
  imgGallery.classList.add("gallery__image");
  imgGallery.src = element.preview;
  imgGallery.alt = element.description;

  itemGallery.append(linkGallery)
  linkGallery.append(imgGallery);
  elements.push(itemGallery);
});
galleryRef.append(...elements);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
