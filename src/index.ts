import Server from './App';
import { port } from './config/index.config';

function Main(): void {
  const server = new Server(port);
  server.StartServer();
}

Main();
