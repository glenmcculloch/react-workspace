import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('cars');
    }

    onTermSubmit = async term => {
        const { data } = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: data.items,
            selectedVideo: data.items[0]
        });
    };

    onVideoSelect = video => {
        if (video !== this.state.selectedVideo) {
            this.setState({ selectedVideo: video })
        }
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;