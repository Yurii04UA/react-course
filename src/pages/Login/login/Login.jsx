import React from "react";
import { useRef, useState, useEffect,useContext } from "react";
import AuthContext from "../context/AuthProvider";

import "./Login.scss";

const Login = () => {
   const {setAuth} = useContext(AuthContext)

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);
    setUser("");
    setPassword("");
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <div className="form mt-5">
          <h1>You are logged in!</h1>
          <p>
            <a href="#">Go to home</a>
          </p>
        </div>
      ) : (
        <div className="form mt-5">
          <p ref={errRef} className={errMsg ? "errMsg" : null}>
            {errMsg}
          </p>
          <h1>Sing In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sing In</button>
          </form>
          <p>
            Need an Account?{" "}
            <span>
              <a href="#">Sing Up</a>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
