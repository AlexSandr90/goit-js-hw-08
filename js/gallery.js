import { images } from './datas.js';

const galleryContainer = document.querySelector('ul.gallery');

const generatedLayout = images
  .map(({ preview, description, original }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', generatedLayout);

const imgPopup = (imgUrl) => {
  const popup = basicLightbox.create(`<img src='${imgUrl}' />`);

  popup.show({
    className: 'img-popup',
  });
};

galleryContainer.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();
  const currentImgUrl = event.target.dataset.source;
  imgPopup(currentImgUrl);
});
