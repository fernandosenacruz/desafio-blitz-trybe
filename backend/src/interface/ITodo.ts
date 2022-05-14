export default interface ITodo {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoService {
  code: number;
  data:
    | {
        id: number;
      }
    | ITodo
    | ITodo[];
}
