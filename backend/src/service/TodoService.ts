import TodoModel from '../model/TodoModel';
import ITodo, { IMessage, ITodoService, ITodosService } from '../interface/ITodo';

export default class TodoService {
  constructor(private todoModel = new TodoModel()) {}

  public createTodo = async (
    title: string,
    description: string
  ): Promise<ITodoService | IMessage> => {
    if (!title || !description)
      return { code: 400, data: { message: 'empty title or description' } };
    
    const newTodo = await this.todoModel.createTodo(title, description);


    return { code: 201, data: newTodo };
  };

  public getTodos = async (status: string): Promise<ITodosService> => {
    const todos = await this.todoModel.getTodos(status);

    return { code: 200, data: todos };
  };

  public getTodo = async (id: number): Promise<ITodoService | IMessage> => {
    const todo = await this.todoModel.getTodo(id);

    if (!todo) return { code: 404, data: { message: 'To do not found' } };

    return { code: 200, data: todo };
  };

  public updateTodo = async (
    id: number,
    title: string,
    description: string,
    status: string
  ): Promise<ITodoService> => {
    const todo = await this.todoModel.updateTodo(
      id,
      title,
      description,
      status
    );
    
    return { code: 200, data: todo };
  };

  public deleteTodo = async (id: number): Promise<ITodoService | IMessage> => {
    const { code, data } = await this.getTodo(id) as ITodoService;
    
    if (code === 404) return { code: 400, data: { message: 'inform a valid id' } };

    await this.todoModel.deleteTodo(data.id);

    return { code: 200, data: { message: 'deleted' } };
  };
}
