import React from 'react';
import ReactDOM from 'react-dom';
import AppoitmentsList from './AppoitmentsList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppoitmentsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});