import React, { useContext, useState, useEffect } from "react";
import { auth } from "../fire";
import { generateUserDocument } from "./firestore";
const AuthContextConfig = React.createContext();
export function AuthContextConfigMethod() {
  return useContext(AuthContextConfig);
}
function AuthContext({ children }) {
  const [Loading, setLoading] = useState(true);
  const [CurrentUser, setCurrentUser] = useState();
  const [userData, setuserData] = useState({});
  async function SignUp(email, username, password) {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    generateUserDocument(user, { username });
  }
  function SignIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function LogOut() {
    return auth.signOut();
  }
  useEffect(() => {
    const AuthChange = async () => {
      auth.onAuthStateChanged(async (user) => {
        try {
          const thisUser = await generateUserDocument(user);
          setuserData(thisUser);
          setCurrentUser(user);
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      });
    };
    AuthChange();
    return AuthChange;
  }, []);
  const value = {
    SignUp,
    SignIn,
    LogOut,
    CurrentUser,
    userData,
  };
  return (
    <>
      <AuthContextConfig.Provider value={value}>
        {!Loading && children}
      </AuthContextConfig.Provider>
    </>
  );
}

export default React.memo(AuthContext);
