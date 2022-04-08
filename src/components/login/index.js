import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

function Login() {
  const { signIn, signed } = useContext(AuthContext);

  async function loginGoogle() {
    await signIn();
  }

  if (!signed) {
    return (
      <button onClick={() => loginGoogle()}>Signin with Google Account</button>
    );
  } else {
    return <Navigate to="/home" />;
  }
}

export default Login;
