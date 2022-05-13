import express from 'express';
import router from './router';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
    this.router();
  }

  private router() {
    this.app.use(router);
  }

  private config():void {
    const accessControl: express.RequestHandler = (
      _req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(this.errorMiddlewre);
  }

  private errorMiddlewre(
    _err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ):void {
    res.status(500).send(this.errorMiddlewre);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log('running', PORT));
  }
}

export { App };

export const { app } = new App();
