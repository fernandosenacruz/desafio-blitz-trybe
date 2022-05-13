import TodoService from "../service/TodoService";
import ITodo from "../interface/ITodo";
import { NextFunction, Request, Response } from "express";

export default class TodoController {
  private todoService: TodoService;
  constructor() {
    this.todoService = new TodoService();
  };

  public async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description } = req.body;
      const { code, data } = await this.todoService.createTodo(title, description);
  
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    };
  };

  public async getTodos(req: Request, res: Response, next: NextFunction) {
     try {
      const { status } = req.body;

      const { code, data } = await this.todoService.getTodos(status);
  
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    };
  };

  public async getTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const { code, data } = await this.todoService.getTodo(Number(id));

      return res.status(code).json(data);
    } catch (error) {
      next(error);
    };
  };

  public async updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const { title, description, status } = req.body;

      const { code, data } = await this.todoService.updateTodo(Number(id), title, description, status);
    } catch (error) {
      next(error);
    };
  }

  public async deleteTodo(id: number): Promise<unknown> {
    return this.todoService.deleteTodo(id);
  };
};
