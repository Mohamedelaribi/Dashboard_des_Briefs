import logo from './logo.svg';
import './App.css';
import ContextProvider from './context/ContextProvider';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <TodoList/>
      </ContextProvider>
    </div>
  );
}

export default App;
