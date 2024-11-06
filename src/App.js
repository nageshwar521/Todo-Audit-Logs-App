import './App.css';
import TodoList from './Todos';
import { Provider } from 'react-redux';
import store from './store';
import Audit from './Audit';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}><TodoList /></div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}><Audit /></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
