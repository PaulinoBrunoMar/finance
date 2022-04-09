import React, { useContext } from "react";
import { AuthContext } from "../context";
import * as S from "./style";

function Header() {
  const { user, signOut } = useContext(AuthContext);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    userOn = user;
  }
  return (
    <S.Div>
      <S.Img src={userOn.photoURL}></S.Img>
      <S.H1>{userOn.displayName}</S.H1>
      <S.Button onClick={signOut}>Sair</S.Button>
    </S.Div>
  );
}

export default Header;
