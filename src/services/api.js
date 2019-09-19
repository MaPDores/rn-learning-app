import axios from 'axios';

const api = axios.create({
    baseURL: 'https://celogram.herokuapp.com'
});

export default api;