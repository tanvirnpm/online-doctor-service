import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ServiceDetails from "./Components/Services/ServiceDetails/ServiceDetails";
import Services from "./Components/Services/Services";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/service-id">
          <ServiceDetails />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
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
