import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../context";
import * as S from "./style";
import icon from "../../assets/google-icon.png";

function Login() {
  const { signIn, signed } = useContext(MyContext);

  async function loginGoogle() {
    await signIn();
  }

  if (!signed) {
    return (
      <S.Div>
        <S.H1>Finance</S.H1>
        <S.Button onClick={loginGoogle}>
          <img src={icon} alt="Google Icon" />
          Sign in with google
        </S.Button>
      </S.Div>
    );
  } else {
    return <Navigate to="/home" />;
  }
}

export default Login;
