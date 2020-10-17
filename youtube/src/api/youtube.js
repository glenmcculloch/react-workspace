import axios from "axios";

const API_KEY = 'AIzaSyCRCNtEYdnm7cE9Q8Gj3sQ5NRXRKk6xWKM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY
    }
});