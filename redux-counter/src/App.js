import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;

