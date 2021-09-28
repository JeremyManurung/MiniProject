import Home from "./pages/Home";
import Masker from "./pages/Masker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Masker" component={Masker} />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
