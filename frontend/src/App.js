import TodoContextProvider, { TodoContext } from './context/TodoContext';
import Table from './component/Table';
import Todo from './component/Todo';
import UpdateTodo from './component/UpdateTodo';
import './App.css';
import { useContext } from 'react';

function App() {
  const { isUpdate } = useContext(TodoContext);
  console.log('app', isUpdate);

  return (
    <>
      <TodoContextProvider>
        <Table />
        { isUpdate ? <UpdateTodo /> : <Todo /> }
      </TodoContextProvider>
    </>
  );
}

export default App;
