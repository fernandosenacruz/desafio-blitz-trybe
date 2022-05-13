import { PrismaClient } from '@prisma/client'
import ITodo from '../interface/ITodo'

const prisma = new PrismaClient()

export default class TodoModel {
  public async createTodo(title: string, description: string): Promise<ITodo> {
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
  }

  public async getTodos(status: string): Promise<ITodo[]> {
    const todos = await prisma.todo.findMany({
      where: {
        status,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return todos;
  }

  public async getTodo(id: number): Promise<ITodo | null> {
    const todo = await prisma.todo.findFirst({
      where: { id },
    });

    return todo;
  }

  public async updateTodo(id: number, title: string, description: string, status: string): Promise<ITodo> {
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
  }

  public async deleteTodo(id: number): Promise<unknown> {
    return await prisma.todo.delete({ where: { id } });
  }
}
