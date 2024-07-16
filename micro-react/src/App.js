import logo from "./logo.svg";
import "./App.css";

function App() {
  function handleClick() {
    console.log("按钮被点击了！");
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>按钮</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
