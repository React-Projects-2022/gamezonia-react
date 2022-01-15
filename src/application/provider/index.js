import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [session, setSession] = useState(
    localStorage.getItem("session")
      ? JSON.parse(localStorage.getItem("session"))
      : { token: "", displayName: "", expiresIn: "" }
  );
  return (
    <AppContext.Provider value={[session, setSession]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();

export default Provider;
