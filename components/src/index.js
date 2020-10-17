import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    comment="I have coronavirus." 
                    avatar={Faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Ben" 
                    timeAgo="Today at 2:00PM" 
                    comment="Sick one man!" 
                    avatar={Faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="April" 
                    timeAgo="Yesterday at 4:45PM" 
                    comment="Fucking nice one dude!!!" 
                    avatar={Faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));