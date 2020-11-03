import React, { useState } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
  const [comments, setComments] = useState([]);

  return (
    <div className="ui container">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
