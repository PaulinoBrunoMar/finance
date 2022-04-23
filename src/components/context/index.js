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
  addDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();
export const MyContext = createContext({});

export const MyContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState();
  const [expiration, setExpiration] = useState("");
  const [editId, setEditId] = useState("");
  const [idForDell, setIdForDell] = useState([]);
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

  async function addEditExpense() {
    if (editId !== undefined && editId !== "") {
      try {
        const docRef = await updateDoc(doc(db, userOn.uid, editId), {
          Despesa: expenseName,
          Vencimento: expiration,
          Valor: parseFloat(cost),
        });
        console.log("Document updated with ID: ", editId);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      try {
        const docRef = await addDoc(collection(db, userOn.uid), {
          Despesa: expenseName,
          Vencimento: expiration,
          Valor: parseFloat(cost),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    getExpenses();
    setEditId("");
    setExpenseName("");
    setCost("");
    setExpiration("");
  }

  const getExpenses = async () => {
    const data = await getDocs(collection(db, userOn.uid));
    setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteExpense = async (id) => {
    const expenseDoc = await doc(db, userOn.uid, id);
    deleteDoc(expenseDoc);
    console.log("Document deleted with ID: ", id);
    getExpenses();
  };

  const deleteAll = async () => {
    expenses.map(async (d) => {
      const expenseDoc = await doc(db, userOn.uid, d.id);
      deleteDoc(expenseDoc);
      console.log("Document deleted with ID: ", d.id);
    });
    getExpenses();
  };

  const editHandler = async (id) => {
    try {
      const expenseDoc = doc(db, userOn.uid, id);
      const docSnap = await getDoc(expenseDoc);
      setExpenseName(docSnap.data().Despesa);
      setCost(docSnap.data().Valor);
      setExpiration(docSnap.data().Vencimento);
    } catch (err) {
      console.log(err);
    }
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
        editHandler,
        setExpiration,
        expiration,
        setCost,
        cost,
        setExpenseName,
        expenseName,
        addEditExpense,
        editId,
        setEditId,
        deleteAll,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
