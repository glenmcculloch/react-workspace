import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

test('Shows the comment box', () => {
  // expect takes object of the thing being looked at and matches it with something
  // e.g. component app finds one copy of commentbox
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test('Shows the comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});