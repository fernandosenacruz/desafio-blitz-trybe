import { Router } from 'express';

import TodoController from './controller/TodoController';

const todoController = new TodoController();

const router: Router = Router();

router.get('/', todoController.getTodos);

router.get('/todo/:id', todoController.getTodo);

router.post('/todo', todoController.createTodo);

router.put('/todo', todoController.updateTodo);

router.delete('/todo', todoController.deleteTodo);

export default router;
