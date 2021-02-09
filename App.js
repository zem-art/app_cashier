import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/routes/navigation';
import store from './store/Store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
