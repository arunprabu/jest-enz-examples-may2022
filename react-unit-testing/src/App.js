import './App.css';
import About from './components/About/About';
import Counter from './components/Counter/Counter';
import Organization from './components/Organization/Organization';
import Search from './components/Search/Search';
import Theme from './components/Theme/Theme';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';
import Movies from './containers/Movies/Movies';

function App() {
  return (
    <div className="App">
      <a href="/">Learn React Testing!</a>

      <About />
      <hr/>

      <Organization />
      <hr/>

      <Movies />
      <hr/>

      <Counter />
      <hr/>

      <Theme />
      <hr/>

      {/* <Todos />
      <hr /> */}

      <Users />

      <hr/>
      <Search />

    </div>
  );
}

export default App;
