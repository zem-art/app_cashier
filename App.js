import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/routes/navigation';
import store from './store/Store';
// import Splash from './src/screen/Splash';

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
