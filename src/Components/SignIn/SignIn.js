import React, { useContext, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { UserContext } from "../../App";

const SignIn = () => {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [loginUser, setLoginUser] = useContext(UserContext);
  let { from } = location.state || { from: { pathname: "/" } };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  if (loginUser.email) {
    history.replace(from);
  }
  const loggedInByGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const user = {
          name: displayName,
          photo: photoURL,
          email: email,
          loggedIn: true,
        };
        setLoginUser(user);
        const userStoreInLocalStorage = JSON.stringify(user);
        localStorage.setItem("loginUser", userStoreInLocalStorage);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const loginByEmail = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newLoginUser = { ...user };
        setLoginUser(newLoginUser);
        const userStoreInLocalStorage = JSON.stringify(user);
        localStorage.setItem("loginUser", userStoreInLocalStorage);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  const onBlurHandler = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };
  console.log(user);
  return (
    <div className="container py-5">
      <div className="row mt-3">
        <div className="col-6 m-auto">
          <div className="border rounded p-3">
            <h4 className="mb-4">Login</h4>
            <form onSubmit={loginByEmail}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  onBlur={onBlurHandler}
                  className="form-control"
                  id="email"
                  placeholder="Username or Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  onBlur={onBlurHandler}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember Me
                  </label>
                </div>
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p className="text-center mt-2">
                Don't have an account?{" "}
                <Link to="/sign-up">Create an account</Link>
              </p>
            </form>
          </div>

          <div className="position-relative w-75 m-auto mt-3 text-center">
            <span
              style={{
                backgroundColor: "white",
                borderColor: "white !important",
              }}
              className="badge border text-dark rounded-circle"
            >
              Or
            </span>
            <div
              className="w-100 border position-absolute top-50 start-0"
              style={{ zIndex: "-9999999999999", backgroundColor: "white" }}
            ></div>
          </div>
          <div className="w-75 m-auto mt-3">
            <div className="border rounded-pill position-relative">
              <i
                style={{ color: "#3076FF", padding: "5px", fontSize: "25px" }}
                className="fab fa-facebook"
              ></i>
              <span className="position-absolute top-50 start-50 translate-middle">
                Continue with Facebook
              </span>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => loggedInByGoogle()}
            className="w-75 m-auto mt-1"
          >
            <div className="border rounded-pill position-relative">
              <i
                style={{ color: "#34A853", padding: "5px", fontSize: "25px" }}
                className="fab fa-google"
              ></i>
              <span className="position-absolute top-50 start-50 translate-middle">
                Continue with Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
