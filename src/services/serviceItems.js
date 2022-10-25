import axios from 'axios';
import service from './service.js';

const request = 1;

export default {
    getAll: () => axios.post(service, {request})
};