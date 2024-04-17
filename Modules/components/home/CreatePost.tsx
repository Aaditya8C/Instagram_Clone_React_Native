import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { LockClosedIcon, XMarkIcon } from "react-native-heroicons/outline";
import { POSTS } from "../../data/posts";

interface CreatePostItems {
  selectedImage?: string;
  setSelectedImage?: (image: string) => void;
}

const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <SafeAreaView className="bg-black py-12">
      <CreatePostHeader />
      <CreatePostContent selectedImage={selectedImage} />
      <CreatePostSelector setSelectedImage={setSelectedImage} />
    </SafeAreaView>
  );
};

const CreatePostHeader = () => {
  return (
    <View className="flex-row justify-between px-4">
      <View className="flex-row gap-3">
        <XMarkIcon size={25} color="white" />
        <Text className="text-white font-bold text-xl">New Post</Text>
      </View>
      <TouchableOpacity>
        <Text className="text-blue-500 text-xl">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const CreatePostContent: React.FC<CreatePostItems> = ({ selectedImage }) => {
  return (
    <View className="flex-row justify-between py-4">
      <Image
        src={selectedImage ? selectedImage : POSTS[0].imageUrl}
        className="h-80 w-full"
      />
    </View>
  );
};

const CreatePostSelector: React.FC<CreatePostItems> = ({
  setSelectedImage,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-row flex-wrap">
        {POSTS.map((image, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImage(image.imageUrl)}
            >
              <Image
                key={index}
                src={image.imageUrl}
                className="w-[120px] h-32"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CreatePost;
