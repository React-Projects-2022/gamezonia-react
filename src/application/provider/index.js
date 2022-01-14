import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [session, setSession] = useState({token: '', displayName: ''});
  return (
    <AppContext.Provider value={[session, setSession]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();

export default Provider;
