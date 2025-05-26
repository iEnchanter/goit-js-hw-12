import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const formEl = document.querySelector('.form');
const inputEl = document.getElementById('search-text');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

formEl.addEventListener('submit', async e => {
    e.preventDefault();

    currentQuery = inputEl.value.trim();
    if (!currentQuery) {
        iziToast.warning({
            title: 'Oops',
            message: 'Please enter a search term.',
        });
        return;
    }

    currentPage = 1;
    clearGallery();
    showLoader();

    await fetchImages();
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    await fetchImages();
});

async function fetchImages() {
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);

        if (data.hits.length === 0 && currentPage === 1) {
            iziToast.info({
                message: 'No images found. Try another query.',
            });
            hideLoader();
            return;
        }

        createGallery(data.hits);

        totalHits = data.totalHits;
        const totalPages = Math.ceil(totalHits / 15);

        if (currentPage < totalPages) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        }

        if (currentPage > 1) {
            smoothScroll();
        }
    } catch (error) {
        console.error(error);
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
    } finally {
        hideLoader();
    }
}  

function smoothScroll() {
    const { height: cardHeight } = document.querySelector('.gallery .gallery-item').getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

console.log(loadMoreBtn.classList);