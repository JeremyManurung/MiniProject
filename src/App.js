import React, {useState, useEffect} from 'react';
import Home from "./pages/Home";
import Masker from "./pages/Masker";
import IsoMan from "./Isoman/IsoMan";
import IsoManHome from "./Isoman/IsoManHome"
import CekKesehatanHome from "./CekKesehatan/CekKesehatanHome"
import CuciTangan from "./CuciTangan/CuciTangan";
import CuciTanganHome from "./CuciTangan/CuciTanganHome";
import MaskerDetail from "./pages/MaskerDetail"
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import FiturHome from "./Fitur/FiturHome"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  })

  return (
    <div>
      {isLoading==true?
        <LoadingScreen/>:
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Masker" component={Masker} />
      <Route path="/MaskerDetail/:id" component={MaskerDetail} />
      <Route path="/IsoMan" component={IsoMan} />
      <Route path="/IsoManHome" component={IsoManHome} />
      <Route path="/FiturHome" component={FiturHome} />
      <Route path="/CekKesehatanHome" component={CekKesehatanHome} />
      <Route path="/CuciTangan" component={CuciTangan} />
      <Route path="/CuciTanganHome" component={CuciTanganHome} />
      </Switch>
    </Router>
}
    </div>
  );
}

export default App;
