import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View className="px-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-2"
      >
        {USERS.map((story, index) => {
          return (
            <View className="flex gap-y-2" key={index}>
              <TouchableOpacity className="relative border-2 border-red-400 rounded-full w-20 h-20 flex justify-center items-center">
                <Image src={story.image} className="w-16 h-16 rounded-full" />
              </TouchableOpacity>
              <Text className="text-white break-all">
                {story?.name?.length > 10
                  ? story.name.slice(0, 10) + "..."
                  : story.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;
