import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50364226-d4960ed7ef7ef1013eeb128c9';


export async function getImagesByQuery(query, page) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
    };

const response = await axios.get(BASE_URL, { params });
    return response.data;
}
