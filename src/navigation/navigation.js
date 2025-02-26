import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation";
import AppNavigation from "./appNavigation";
import { AuthContext } from "../context/AuthContext";

const Navigation = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
