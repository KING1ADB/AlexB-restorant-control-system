import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
