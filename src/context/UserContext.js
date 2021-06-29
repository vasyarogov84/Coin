import { useState, createContext } from "react";

export const UserContext = createContext({
  user: null,
  signIn: () => {},
  logOut: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (user) => setUser(user);
  const logOut = () => setUser(null);

  return (
    <UserContext.Provider
      value={{
        logOut,
        signIn,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
