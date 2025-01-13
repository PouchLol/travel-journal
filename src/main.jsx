import { createRoot } from "react-dom/client"
import App from "./App"
import "./main.css"
const rootId = createRoot(document.getElementById("root"))

rootId.render(
    <div className="smaller-root">
      <App></App>
    </div>
    
)