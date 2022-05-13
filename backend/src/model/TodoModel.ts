import { PrismaClient } from '@prisma/client';
import ITodo from '../interface/ITodo';

const prisma = new PrismaClient();

export default class TodoModel {
  public createTodo = async (
    title: string,
    description: string
  ): Promise<ITodo> => {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return newTodo;
  };

  public getTodos = async (status: string): Promise<ITodo[]> => {
    const todos = await prisma.todo.findMany({
      where: {
        status,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return todos;
  };

  public getTodo = async (id: number): Promise<ITodo | null> => {
    const todo = await prisma.todo.findFirst({
      where: { id },
    });

    return todo;
  };

  public updateTodo = async (
    id: number,
    title: string,
    description: string,
    status: string
  ): Promise<ITodo> => {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        description,
        status,
        updatedAt: new Date(),
      },
    });

    return updatedTodo;
  };

  public deleteTodo = async (id: number): Promise<ITodo> => {
    return await prisma.todo.delete({ where: { id } });
  };
}
