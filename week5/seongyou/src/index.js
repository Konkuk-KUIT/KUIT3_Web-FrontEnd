import { createRoot } from "react-dom/client";
import App from "./App";
// export default App; -> import App from "./App";
// export {App}; -> import {App} from "./App";

const root = createRoot(document.getElementById("app")); // root 지정

root.render(<App />);