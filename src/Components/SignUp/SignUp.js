import React, { useContext, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { UserContext } from "../../App";

const SignUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loginUser, setLoginUser] = useContext(UserContext);
  const auth = getAuth();
  const [newUser, setNewUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
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
  const signUpWithEmail = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const submitUser = userCredential.user;
        console.log("clicked", submitUser);
        updateProfileName(user.name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("user not sign in");
      });
    console.log("clicked");
  };
  const oncBlurHandler = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };
  const updateProfileName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log("update user name successfully...");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  console.log(user);
  return (
    <div className="container my-5">
      <div className="row mt-3">
        <div className="col-md-6 m-auto">
          <div className="border rounded p-3">
            <h4 className="mb-4">Registration</h4>
            <form onSubmit={() => signUpWithEmail(event)}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  onBlur={oncBlurHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onBlur={oncBlurHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onBlur={oncBlurHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Create an account
              </button>
              <p className="text-center mt-2">
                Already have an account? <Link to="/sign-in">Login</Link>
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
            onClick={() => loggedInByGoogle(googleProvider)}
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

export default SignUp;
