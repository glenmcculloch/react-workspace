import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = ({ defaultSearchTerm }) => {
    const [videos, setVideos] = useState([]);

    // on initialisation
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const { data } = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(data.items);
    };

    return [videos, search];
};

export default useVideos;