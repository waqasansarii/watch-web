import React, { useState } from "react";
import LoginForm from "../../Components/LoginForm";
import { useHistory } from "react-router-dom";
import firebase from "../../Config/FirebaseConfig";
import "./login.css";

const inputFieldValue = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useHistory();

  let auth = firebase.auth();
  const [loading, setLoading] = useState(false);
  const [loginInputs, setLoginInputs] = useState(inputFieldValue);
  const handleChangeLoginInputs = (event) => {
    setLoginInputs({
      ...loginInputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    let { email, password } = loginInputs;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userLogin) => {
        setLoading(false);
        console.log("user login");
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
      });
    setLoginInputs(inputFieldValue);
  };

  return (
    <div>
      <LoginForm
        handleChange={handleChangeLoginInputs}
        handleSubmit={handleLoginSubmit}
        inputsValues={loginInputs}
        loading={loading}
      />
    </div>
  );
};

export default Login;
