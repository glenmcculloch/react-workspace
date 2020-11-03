import React, { useState } from 'react';
import { connect } from 'react-redux';

const CommentBox = props => {
    const [comment, setComment] = useState('');

    const onSubmit = e => {
        e.preventDefault();
    };

    const onTextChange = e => {
        e.preventDefault();
        
        // TODO - call an action creator
    };

    return (
        <div className="ui segment">
            <form onSubmit={onSubmit}>
                <h4>Enter a Comment</h4>
                <textarea value={comment} onChange={onTextChange} />
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CommentBox;