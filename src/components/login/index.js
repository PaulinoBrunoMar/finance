import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../context";

function Login() {
  const { signIn, signed } = useContext(MyContext);

  async function loginGoogle() {
    await signIn();
  }

  if (!signed) {
    return <button onClick={loginGoogle}>Logar com conta Google</button>;
  } else {
    return <Navigate to="/home" />;
  }
}

export default Login;
