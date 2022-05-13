import TodoModel from "../model/TodoModel";
import { ITodoService, ITodosService } from "../interface/ITodo";

export default class TodoService {
  private todoModel: TodoModel;
  constructor() {
    this.todoModel = new TodoModel();
  }

  public async createTodo(title: string, description: string): Promise<ITodoService> {
    const newTodo = await this.todoModel.createTodo(title, description);

    if (!title || !description) return { code: 400, data: { message: 'empty title or description'} };

    return { code: 201, data: newTodo };
  }

  public async getTodos(status: string): Promise<ITodosService> {
    const todos = await this.todoModel.getTodos(status);

    return { code: 200, data: todos };
  }

  public async getTodo(id: number): Promise<ITodoService> {
    const todo = await this.todoModel.getTodo(id);

    if (!todo) return { code: 404, data: { message: 'To do not found' } };

    return { code: 200, data: todo };
  }

  public async updateTodo(id: number, title: string, description: string, status: string): Promise<ITodoService> {
    const todo =  await this.todoModel.updateTodo(id, title, description, status);

    return { code: 200, data: todo };
  }

  public async deleteTodo(id: number): Promise<unknown> {
    if (!id) return { code: 400, data: { message: 'inform an id' } };
    await this.todoModel.deleteTodo(id);

    return { code: 200, data:{ message: '' } };
  }
}
