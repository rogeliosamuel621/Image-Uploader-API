import Server from './App';

function Main(): void {
  const server = new Server('8000');
  server.StartServer();
}

Main();
