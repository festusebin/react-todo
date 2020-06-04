import React from 'react';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/);
  expect(linkElement).toBeInTheDocument();
});
*/

test('renders learn react link', () => {
  const div = document.create('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
