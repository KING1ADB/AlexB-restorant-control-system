import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants";

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor={COLORS.white} />
        <KeyboardAvoidingView>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/salad.jpg")}
              resizeMode="cover"
              style={styles.image}
            />
          </View>

          <View style={styles.textWrapper}>
            <View style={styles.textCont}>
              <Text style={styles.textTitle}>Hello welcome</Text>
              <Text style={styles.textTitlesm}>to</Text>
              <Text style={styles.textTitle}>Green Spice</Text>
            </View>
            <Text style={styles.textDesc}>
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your customers.
            </Text>
          </View>

          <CustomInput
            label={"Email"}
            placeholder={"Example@gmail.com"}
            keyboardType="email-address"
          />
          <CustomInput
            label={"Password"}
            placeholder={"At least 8 characters"}
            secureTextEntry={true}
          />
          <View style={styles.forgotPwdWrapper}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.forgotPwd}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton title={"Sign Up"} />

          <View style={styles.signInWrapper}>
            <View style={styles.signInDivider} />
            <Text style={styles.signInText}>Or sign in with</Text>
            <View style={styles.signInDivider} />
          </View>

          <View style={styles.linksContainer}>
            <TouchableOpacity style={styles.linkWrapper} activeOpacity={0.5}>
              <Image
                source={require("../../../assets/google.png")}
                style={styles.linkImage}
              />
              <Text style={styles.linkText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkWrapper} activeOpacity={0.5}>
              <Image
                source={require("../../../assets/facebook.png")}
                style={styles.linkImage}
              />
              <Text style={styles.linkText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <View style={styles.signupWrapper}>
              <Text style={styles.signupText}>Already have an account ? </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.forgotPwd}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RegisterScreen;
