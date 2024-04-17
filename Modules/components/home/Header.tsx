import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { HeartIcon, PaperAirplaneIcon } from "react-native-heroicons/outline";
import { FirebaseAuth } from "../../../firebase";

const Header = () => {
  const handleLogout = () => {
    try {
      FirebaseAuth.signOut().then(() => {
        console.log("Signed out successfully");
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View className="flex-row justify-between items-center px-2 py-3">
      <TouchableOpacity onPress={handleLogout}>
        <Image
          source={require("../../assets/hLogoo.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View className="flex-row gap-3 items-center px-1">
        <TouchableOpacity>
          <HeartIcon size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="relative bottom-1">
          <View className="bg-red-500 absolute z-50 rounded-full p-1 left-4 bottom-4">
            <Text className="text-white ">20</Text>
          </View>
          <View className="-rotate-45">
            <PaperAirplaneIcon size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
