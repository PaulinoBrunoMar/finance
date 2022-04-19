import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();
export const MyContext = createContext({});

export const MyContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  let userOn = null;

  useEffect(() => {
    const loadStorage = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    };
    loadStorage();
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  try {
    userOn = JSON.parse(user);
  } catch (e) {
    console.log(e);
  }

  const getExpenses = async () => {
    const data = await getDocs(collection(db, userOn.uid));
    setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteExpense = async (id) => {
    const expenseDoc = doc(db, userOn.uid, id);
    deleteDoc(expenseDoc);
    getExpenses();
  };

  const updateExpense = async (id, updatedExpense) => {
    const expenseDoc = doc(db, userOn.uid, id);
    updateDoc(expenseDoc, updatedExpense);
    getExpenses();
  };

  return (
    <MyContext.Provider
      value={{
        signIn,
        signed: !!user,
        user,
        signOut,
        getExpenses,
        expenses,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
