import TodoContextProvider from './context/TodoContext';
import Table from './component/Table';
import Todo from './component/Todo';
// import UpdateTodo from './component/UpdateTodo';
import './App.css';

function App() {
  return (
    <>
      <TodoContextProvider>
        <Table />
        <Todo />
        {/* <UpdateTodo /> */}
      </TodoContextProvider>
    </>
  );
}

export default App;
