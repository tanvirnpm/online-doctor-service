import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="">
          <Home />
        </Route>
        <Route path="">
          <Home />
        </Route>
        <Route path="">
          <Home />
        </Route>
        <Route path="">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
