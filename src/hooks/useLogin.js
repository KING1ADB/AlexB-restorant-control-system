import React, { useContext, useState } from "react";
import { ToastAndroid } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserInfo, setIsLoggedIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const verifyCredentials = (email, pwd) => {
    if (email.length <= 0 || pwd.length <= 0) {
      return true;
    }
  };

  const LoginUser = (email, pwd) => {
    setIsLoading(true);
    if (verifyCredentials(email, pwd)) {
      ToastAndroid.show("Invalid credentials", 2000);
    } else {
      if (email !== "example@gmail.com") {
        ToastAndroid.show("Wrong email", 2000);
      } else if (pwd !== "12345678") {
        ToastAndroid.show("Wrong password", 2000);
      } else {
        setUserInfo({
          email,
          password: pwd,
        });
        setIsLoggedIn(true);
        navigation.navigate("Orders");
      }
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    LoginUser,
    email,
    password,
    setEmail,
    setPassword,
  };
}
