import { createRoot } from 'react-dom/client';
// import App from './App';    // App.js에서 export default App;일 때
import { App } from './App';  // App.js에서 export { App };일 때

const root = createRoot(document.getElementById("app"));

root.render(<App />);