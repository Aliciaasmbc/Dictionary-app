import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Alicia's Dictionary 📖</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
      </div>
      <footer className="app-footer">
        <small>
          This project was coded with 🤍 by {""}
          <a
            href="https://www.linkedin.com/in/alicia-apreala-8a26a552/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alicia Apreala {""}
          </a>
          and is {""}
          <a
            href="https://github.com/Aliciaasmbc/Dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on Github
          </a>
        </small>
      </footer>
    </div>
  );
}
