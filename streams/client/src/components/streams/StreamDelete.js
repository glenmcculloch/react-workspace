import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        if (this.props.stream) {
            return (
                <React.Fragment>
                    Are you sure you want to delete this stream? <br/><br/>
                    <label>Title: {this.props.stream.title}</label><br/>
                    <label>Description: {this.props.stream.description}</label>
                </React.Fragment>
            );
        }

        return 'Are you sure you want to delete this stream?';
    }

    render() {
        return (
            <div>
                <Modal 
                    header="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);