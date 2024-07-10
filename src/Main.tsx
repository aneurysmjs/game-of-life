import { createRoot } from 'react-dom/client';
import App from './App'


const app = document.querySelector('#app');

if (app !== null) {
  const root = createRoot(app);
  root.render(<App />);
}

