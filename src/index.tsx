import { createRoot } from 'react-dom/client';
import { App } from './components/App';

createRoot(document.querySelector('#app') as HTMLElement).render(<App />);
