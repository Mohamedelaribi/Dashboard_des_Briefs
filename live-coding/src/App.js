import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoListProvider from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <AddTodoForm/>
        <TodoList/>
      </TodoListProvider>
    </div>
  );
}

export default App;
