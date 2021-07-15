import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinderclback.herokuapp.com"
})

export default instance;