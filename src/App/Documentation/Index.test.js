import React from 'react';
import ReactDOM from 'react-dom';
import DocIndex from './Index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DocIndex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
