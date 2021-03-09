import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Heroes from "../src/pages/Heroes"
import Hero from "../src/pages/Hero"
import MenuComp from "../src/components/Menu"

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/heroes">
          <Heroes />
        </Route> 
        <Route path="/hero">
          <Hero />
        </Route> 
        <Route path="/menu">
          <MenuComp />
        </Route> 
    </Router>
  );
}
export default App;