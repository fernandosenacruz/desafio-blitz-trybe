import { NextFunction, Request, Response } from 'express';
import TodoService from '../service/TodoService';

export default class TodoController {
  constructor(private todoService = new TodoService()) {}

  public createTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, description } = req.body;

      const { code, data } = await this.todoService.createTodo(
        title,
        description
      );

      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status } = req.query;

      const { code, data } = await this.todoService.getTodos(status as string);

      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const { code, data } = await this.todoService.getTodo(Number(id));

      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  };

  public updateTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      const { title, description, status } = req.body;

      const { code, data } = await this.todoService.updateTodo(
        Number(id),
        title,
        description,
        status
      );

      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  };

  public deleteTodo = async (req: Request,
    res: Response,
    next: NextFunction) => {
      try {
        const { id } = req.params;

        const { code, data } = await this.todoService.deleteTodo(Number(id));

        return res.status(code).json(data);
      } catch (error) {
        next(error);
      };
  };
}
