import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <ItemList />
    </Provider>
  );
}

export default App;
