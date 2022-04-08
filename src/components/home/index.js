import React, { useContext } from "react";
import { AuthContext } from "../context";

function Home() {
  const { user, signOut } = useContext(AuthContext);
  let userOn = null;

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    userOn = user;
  }

  console.log(typeof userOn);
  return (
    <div>
      <h1>Wellcome {userOn.displayName}</h1>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
}

export default Home;
