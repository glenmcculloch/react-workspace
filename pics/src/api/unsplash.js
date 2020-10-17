import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AFcp-a71wP8WmCoVOv_BaJfNl7FtzKyrdZ0xvTypAsI'
    }
});