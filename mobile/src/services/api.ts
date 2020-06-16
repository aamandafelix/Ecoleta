import axios from 'axios';
import Config from '../config';

const api = axios.create({
    baseURL: Config.API_ADDRESS + ':' + Config.API_PORT
});

export default api;