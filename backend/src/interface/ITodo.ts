export default interface ITodo {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IMessage {
  message: string;
}

export interface ITodoService {
  code: number;
  data:
    | {
        id: number;
      }
    | ITodo
    | ITodo[]
    | IMessage;
}
