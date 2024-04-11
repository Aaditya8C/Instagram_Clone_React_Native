import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  FilmIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { USERS } from "../../data/users";

const BottomTabs = () => {
  const iconData = [
    {
      icon: <HomeIcon size={28} color="white" />,
      key: "home",
    },
    { icon: <MagnifyingGlassIcon size={28} color="white" />, key: "explore" },
    { icon: <PlusCircleIcon size={28} color="white" />, key: "addPost" },
    { icon: <FilmIcon size={28} color="white" />, key: "reels" },
    {
      icon: (
        <Image
          source={{ uri: USERS[0].image }}
          className="w-8 h-8 rounded-full"
        />
      ),
      key: "profile",
    },
  ];

  return (
    <View className="flex-row justify-between px-4 items-center pt-2 -mb-7">
      {iconData.map(({ icon, key }) => (
        <TouchableOpacity key={key}>{icon}</TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTabs;
