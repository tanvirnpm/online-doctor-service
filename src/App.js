import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ServiceDetails from "./Components/Services/ServiceDetails/ServiceDetails";
import Services from "./Components/Services/Services";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({
    name: "",
    photo: "",
    email: "",
    login: false,
  });
  useEffect(() => {
    const getLocalStorageUser = JSON.parse(localStorage.getItem("loginUser"));
    // console.log(getLocalStorageUser);
    if(getLocalStorageUser){
      setLoginUser(getLocalStorageUser);
    }
  }, []);
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loginUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
