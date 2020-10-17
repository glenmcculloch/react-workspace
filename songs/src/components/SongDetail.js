import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) =>  {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="header">
                        {selectedSong ? selectedSong.title : 'Choose a song'}
                    </div>
                    <div className="meta">Duration: {selectedSong ? selectedSong.duration : '...'}</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);