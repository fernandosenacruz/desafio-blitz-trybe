import TodoContextProvider, { TodoContext } from './context/TodoContext';
import Header from './component/Header';
import Table from './component/Table';
import Todo from './component/Todo';
import UpdateTodo from './component/UpdateTodo';
import { useContext } from 'react';
import './App.css';

function App() {
  const { isUpdate } = useContext(TodoContext);
  console.log('app', isUpdate);

  return (
    <>
      <Header />
      <TodoContextProvider>
        <Table />
        { isUpdate ? <UpdateTodo /> : <Todo /> }
      </TodoContextProvider>
    </>
  );
}

export default App;
