import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/outline";

type RootStackParamList = {
  Home: undefined;
};

type CreatePostNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};
const CreatePostHeader: React.FC<CreatePostNavigationProps> = ({
  navigation,
}) => {
  return (
    <View className="flex-row justify-between px-4">
      <View className="flex-row gap-3">
        <XMarkIcon
          size={25}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
        <Text className="text-white font-bold text-xl">New Post</Text>
      </View>
      <TouchableOpacity>
        <Text className="text-blue-500 text-xl">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostHeader;
