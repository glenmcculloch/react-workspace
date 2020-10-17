import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        errorMessage: ''
    };

    constructor(props) {
        super(props);
    }

    renderContent() {
        if (!this.state.latitude && !this.state.errorMessage) {
            return <Spinner text="Please accept user location request..." />;
        }
        
        if (this.state.latitude && !this.state.errorMessage) {
            return <SeasonDisplay latitude={this.state.latitude} longitude={this.state.longitude} />
        }

        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
    }

    componentDidMount() {
        // get the user's current position
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));