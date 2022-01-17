import Home from './Home';
import Footer from './components/Footer';
import Todo from './Todo';
import Pwg from './Pwg';
import Pwc from './Pwc';
import Tictactoe from './Tictactoe';
import Nasaapi from './Nasaapi';
import Tetris from './Tetris';
import NotFound from './NotFound';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="footercorrect">
        <NavBar />
        <div className="bigScreenMain">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todolist">
              <Todo />
            </Route>
            <Route path="/pwg">
              <Pwg />
            </Route>
            <Route path="/pwc">
              <Pwc />
            </Route>
            <Route path="/tictactoe">
              <Tictactoe />
            </Route>
            <Route path="/nasaapi">
              <Nasaapi />
            </Route>
            {/* <Route path="/tetris">
              <Tetris />
            </Route> */}
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
