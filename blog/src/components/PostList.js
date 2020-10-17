import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = ({ posts, fetchPostsAndUsers }) => {
    
    // componentDidMount equivalent
    useEffect(() => {
        fetchPostsAndUsers();
    }, [fetchPostsAndUsers]);

    const renderPosts = (() => {
        return posts.map(post => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    })

    return (
        <div className="ui relaxed divided list">{renderPosts()}</div>
    );
};

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);