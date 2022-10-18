import React, { useContext } from "react";
import { BiRefresh } from "react-icons/bi";
import { MyContext } from "../context";
import * as S from "./style";

function Header() {
  const { user, signOut } = useContext(MyContext);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    userOn = user;
  }

  function recarregarAPagina(){
    window.location.reload();
  } 

  return (
    <S.Div>
      <S.Img src={userOn.photoURL}></S.Img>
      <S.H1>{userOn.displayName}</S.H1>
      <S.ReloadBtn onClick={recarregarAPagina}><BiRefresh size={40}/></S.ReloadBtn>
      <S.Button onClick={signOut}>Sair</S.Button>
    </S.Div>
  );
}

export default Header;
