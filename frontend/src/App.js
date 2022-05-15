import TodoContextProvider from './TodoContext';
import Table from './component/Table';
import Todo from './component/Todo';
import UpdateTable from './component/UpdateTable';
import './App.css';

function App() {
  return (
    <>
      <TodoContextProvider>
        <Table />
        <Todo />
        <UpdateTable />
      </TodoContextProvider>
    </>
  );
}

export default App;
