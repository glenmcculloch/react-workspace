import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
    const renderUser = () => {
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    };

    return renderUser();
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find((user => user.id === ownProps.userId)) };
};

export default connect(mapStateToProps)(UserHeader);