import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => `
                <li class="gallery-item">
                    <a href="${largeImageURL}">
                        <img class="img" src="${webformatURL}" alt="${tags}" />
                    </a>
                    <div class="info">
                        <div class="info-item">
                            <p class="label">Likes:</p>
                            <p class="value">${likes}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Views:</p>
                            <p class="value">${views}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Comments:</p>
                            <p class="value">${comments}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Downloads:</p>
                            <p class="value">${downloads}</p>
                        </div>
                    </div>
                </li>
            `
        )
        .join('');

    galleryList.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryList.innerHTML = '';
}

export function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.remove('hidden');
    }
}
export function hideLoader () {
        const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
}