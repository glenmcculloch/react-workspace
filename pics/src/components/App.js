import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = { images: [] }

    // calls unsplash api to retrieve images
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data });

        console.log(response.data);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <br />
                <ImageList images={this.state.images} />
            </div>
        );
    }
};

export default App;