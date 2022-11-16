import axios from 'axios';
import service from './service.js';

export default {
    getAll: () => axios.post(service, {request: 1}),
    getCategories: () =>  axios.post(service, {request: 2}),
};