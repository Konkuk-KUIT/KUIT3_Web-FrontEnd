import { createRoot } from "react-dom/client";
import App from "./App";
//import {App} from "./App";

const root = createRoot(document.getElementById("app")); //root 지정
root.render(<App />);
