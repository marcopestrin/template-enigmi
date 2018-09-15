import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://enigmi-c84be.firebaseio.com/'
})

export default instance;