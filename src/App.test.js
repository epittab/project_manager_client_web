import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './Redux/store'

test('renders learn react link', () => {
  const { getByText } = render(<Router>  <Provider store={store}> <App /> </Provider> </Router> );
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
