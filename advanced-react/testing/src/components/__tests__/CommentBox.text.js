import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

test('Shows a textarea and submit button', () => {
    const wrapped = mount(<CommentBox />);
    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));
});