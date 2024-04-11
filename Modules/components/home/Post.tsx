import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  Bars3Icon,
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "react-native-heroicons/outline";
// import { Divider } from "@rneui/themed";

interface PostType {
  post: {
    imageUrl: string;
    user: string;
    profilePicture: string;
    likes: number;
    caption: string;
    comments: {
      username: string;
      comment: string;
    }[];
  };
}
const Post: React.FC<PostType> = ({ post }) => {
  //   console.log(POSTS[0]);
  return (
    <View className="my-5">
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter post={post} />
      <PostComments post={post} />
    </View>
  );
};

const PostHeader: React.FC<PostType> = ({ post }) => {
  return (
    <View className="flex-row justify-between items-center px-3">
      <View className="flex-row gap-4 items-center">
        <Image src={post?.profilePicture} className="h-9 w-9 rounded-full" />
        <Text className="text-white">{post?.user}</Text>
      </View>
      <Bars3Icon size={27} color="white" />
    </View>
  );
};

const PostContent: React.FC<PostType> = ({ post }) => {
  return (
    <View className="py-3">
      <Image src={post.imageUrl} className="w-full h-96" resizeMode="cover" />
    </View>
  );
};

const PostFooter: React.FC<PostType> = ({ post }) => {
  return (
    <View className="px-4">
      <View className="flex-row justify-between items-center ">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <HeartIcon size={27} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ChatBubbleOvalLeftIcon size={27} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <PaperAirplaneIcon size={27} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <BookmarkIcon size={27} color="white" />
        </TouchableOpacity>
      </View>
      <View className="mt-2">
        <Text className="text-white">
          {post?.likes?.toLocaleString("en")} likes
        </Text>
        <Text className="text-white">
          <Text className="font-semibold">{post?.user}</Text>
          <Text>
            {"  "}
            {post.caption}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const PostComments: React.FC<PostType> = ({ post }) => {
  return (
    <View className="mt-1 px-4">
      {post?.comments?.length == 1 ? (
        <TouchableOpacity>
          <Text className="text-white">{post?.comments[0]?.comment}</Text>
        </TouchableOpacity>
      ) : post?.comments?.length > 1 ? (
        <TouchableOpacity>
          <Text className="text-gray-400 text">
            View all {post?.comments?.length} comments{" "}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Post;
