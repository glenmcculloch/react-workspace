import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [videos, search] = useVideos({ defaultSearchTerm: 'cars' });
    const [selectedVideo, setSelectedVideo] = useState(null);

    // on initialisation
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    const onVideoSelect = video => {
        if (video !== selectedVideo) {
            setSelectedVideo(video);
        }
    };

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;