import Express, { Application } from 'express';

import uploadImage from './routes/uploadImage.routes';

class Server {
  private App: Application;

  constructor(private port: string) {
    this.App = Express();
    this.Settings();
    this.Routes();
  }

  private Settings(): void {
    this.App.set('port', this.port);
  }

  private Routes(): void {
    this.App.use('/api', uploadImage);
  }

  public StartServer(): void {
    this.App.listen(this.App.get('port'));
    console.log('Wroking');
  }
}

export default Server;
