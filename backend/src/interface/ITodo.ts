export default interface ITodo {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

 export interface IMessage {
  code: number;
  data: {
    message?: string;
  }
}

export interface ITodoService {
  code: number;
  data: ITodo;
}

export interface ITodosService {
  code: number;
  data: ITodo[];
}
