import Home from "./pages/Home";
import Masker from "./pages/Masker";
import IsoMan from "./Isoman/IsoMan";
import IsoManHome from "./Isoman/IsoManHome"

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
      <Route path="/IsoMan" component={IsoMan} />
      <Route path="/IsoManHome" component={IsoManHome} />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
