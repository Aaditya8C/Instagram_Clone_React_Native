import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CreatePostHeader from "../components/post/CreatePostHeader";
import CreatePostSection from "../components/post/CreatePostSection";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type CreatePostNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};
const CreatePostScreen: React.FC<CreatePostNavigationProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView className="bg-black h-full pt-12">
      <CreatePostHeader navigation={navigation} />
      <CreatePostSection navigation={navigation} />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
