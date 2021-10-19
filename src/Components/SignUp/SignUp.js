import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const auth = getAuth();
  const [newUser, setNewUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  const signUpWithEmail = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("clicked", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("clicked");
  };
  const oncBlurHandler = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };
  console.log(user);
  return (
    <div className="container my-5">
      <div className="row mt-3">
        <div className="col-6 m-auto">
          <div className="border rounded p-3">
            <h4 className="mb-4">Login</h4>
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
            onClick={() => signInWithGoogle(googleProvider)}
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
