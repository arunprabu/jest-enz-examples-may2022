import './App.css';
import About from './components/About/About';
import Counter from './components/Counter/Counter';
import Organization from './components/Organization/Organization';
import Theme from './components/Theme/Theme';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <a href="/">Learn React Testing!</a>

      <About />
      <hr/>

      <Organization />
      <hr/>

      <Counter />
      <hr/>

      <Theme />
      <hr/>

      <Todos />
      <hr />

    </div>
  );
}

export default App;
