// const Login = () => {
//     return <h1>Login</h1>;
//   };
  
//   export default Login;

import React from "react";
import "../App.css";


export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <h3>{<br />}</h3>
      <div className="headerTwo">
      <h2>Google Login</h2>
      </div>
      <h3>{<br />}</h3>
      <h3>{<br />}</h3>
    </div>
  );
}

