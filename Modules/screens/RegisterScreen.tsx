import { View, Image, SafeAreaView } from "react-native";
import React from "react";
import Register from "../components/auth/Register";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type RegisterNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};
const RegisterScreen: React.FC<RegisterNavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-black h-full w-full px-4 py-10">
      <View className="flex gap-2 justify-center items-center mt-20">
        <Image source={require("../assets/iLogo.png")} className="w-24 h-24" />
        <Register navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
