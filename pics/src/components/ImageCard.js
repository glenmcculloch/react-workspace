import React from 'react';

class ImageCard extends React.Component {
    state = { spans: 0 };

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render() {
        const { alt_description, urls } = this.props.image;

        return (
            <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;