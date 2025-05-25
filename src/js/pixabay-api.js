import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '50364226-d4960ed7ef7ef1013eeb128c9';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });

    return response.data;
}
