import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import Game from './screens';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default App;
