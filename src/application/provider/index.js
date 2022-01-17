import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const checkSession = (session) => {
    if (session ) {
      const sessionData = JSON.parse(localStorage.getItem("session"));
      if (new Date(sessionData.expiresIn).getTime() > new Date().getTime()) {
        console.log("Token valido");
        return sessionData;
      }
      console.log("Token expirado");
      localStorage.removeItem("session")
    }
    return { token: "", displayName: "", expiresIn: "" }
  }
  
  const [session, setSession] = useState(
    checkSession(localStorage.getItem("session"))
  );
  
  return (
    <AppContext.Provider value={[session, setSession]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();

export default Provider;
