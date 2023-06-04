
import { Provider } from 'react-redux';

import './App.css';

import CounterController from './components/CounterController';
import store from './store';

function App() {
    
  return (
      <>
      <Provider store={store}>
    <CounterController/>
    <CounterController/>
    </Provider>
    </>
  );
}

export default App;
