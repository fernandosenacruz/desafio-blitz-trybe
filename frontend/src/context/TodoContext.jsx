import { createContext, useState } from 'react';

export const TodoContext = createContext({ isUpdate: false }, () => {});

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({});

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
