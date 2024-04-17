import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CreatePostHeader from "../components/post/CreatePostHeader";
import CreatePostSection from "../components/post/CreatePostSection";

const CreatePostScreen = () => {
  return (
    <SafeAreaView className="bg-black h-full pt-12">
      <CreatePostHeader />
      <CreatePostSection />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
