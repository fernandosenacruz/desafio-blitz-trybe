import { createContext, useState } from 'react';

const TodoContext = createContext([{}, () => {}]);

const TodoContextProvider = children => {
  const [todo, setTodo] = useState({});

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      { children }
    </TodoContext.Provider>
  )
};

export default TodoContextProvider;
