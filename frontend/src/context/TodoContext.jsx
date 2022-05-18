import { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow]  = useState(false);

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, isUpdate, setIsUpdate, show, setShow }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
