import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header-nav">
        <span>
          <Link to={"react"}>React微应用</Link>
        </span>
        <span>
          <Link to={"vue"}>Vue微应用</Link>
        </span>
      </div>
      <div className="micro-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
