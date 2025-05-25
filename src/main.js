import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = form.elements['search-text'].value.trim();

    if (!query) {
        iziToast.warning({
            title: 'Oops',
            message: 'Please enter a search term.',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.error({
                title: '',
                titleColor: '#FFFFFF',
                titleSize: '16px',
                backgroundColor: '#EF4040',
                iconUrl: './img/bi_x-octagon.svg',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                color: 'red',
                messageColor: '#FFFFFF',
                messageSize: '16px',
                closeOnEscape: true,
                closeOnClick: true,
                theme: 'dark',
            });
        } else {
            createGallery(data.hits);
    }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            iconUrl: './img/bi_x-octagon.svg',
        });
    } finally {
        hideLoader();
    }
});
