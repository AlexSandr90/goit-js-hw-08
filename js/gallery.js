import { images } from './datas.js';

const galleryContainer = document.querySelector('ul.gallery');

const generatedLayout = images
  .map(({ preview, description }) => {
    return `<li>
        <img class='gallery-img' src='${preview}' alt='${description}' />
    </li>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', generatedLayout);

const imgPopup = (imgUrl) => {
  const popup = basicLightbox.create(`
    <img src='${imgUrl}' />
   `);

  popup.show({
    className: 'img-popup'
  });
};

galleryContainer.addEventListener('click', (event) => {
  const currentSrc = event.target.src;

  const currentElement = images.filter(({ preview }) => preview === currentSrc);
  const { original } = currentElement[0];
  imgPopup(original);
});
