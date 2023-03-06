import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { logBuildInfo } from './logBuildInfo';

logBuildInfo();

createRoot(document.querySelector('#app') as HTMLElement).render(<App />);
