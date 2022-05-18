import Header from './component/Header';
import Table from './component/Table';
import Todo from './component/Todo';
import UpdateTodo from './component/UpdateTodo';
import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import './App.css';

function App() {
  const {isUpdate} = useContext(TodoContext);

  return (
    <>
      <Header />
      <Table />
      {isUpdate === true ? <UpdateTodo /> : <Todo />}
    </>
  );
}

export default App;
