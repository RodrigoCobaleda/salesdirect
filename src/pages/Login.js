// const Login = () => {
//     return <h1>Login</h1>;
//   };
  
//   export default Login;

import React from "react";
import "../App.css";
import GoogleLogin from "react-google-login";

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
      <GoogleLogin
        clientId="519846072436-hiroropn96squ7buljsig3u4ot1abmu2.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        theme="light"
        Navigate="./Home"
      />
      <h3>{<br />}</h3>
    </div>
  );
}

