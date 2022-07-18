import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import "./Login.scss";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

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

  const back = () => {
   setSuccess(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(LOGIN_URL, JSON.stringify({user,password}),{
      //    headers:{'Content-Type': 'application/json'},
      //    withCredentials: true
      // })
      // console.log(JSON.stringify(response?.data));
      // // console.log(JSON.stringify(response));

      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({user,password,roles,accessToken})

      setUser("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if(!err?.response){
         setErrMsg('No Server Response')
      } else if (err.response?.status === 400){
         setErrMsg('Missing Username or Password')
      } else if(err.response?.status === 401){
         setErrMsg('Unauthorized')
      } else{
         setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
  };
  return (
    <>
      {success ? (
        <div className="form mt-5">
          <h1>You are logged in!</h1>
          <p>
            <a onClick={back} href="#">Go to home</a>
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
