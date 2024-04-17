import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { POSTS } from "../../data/posts";
import * as Yup from "yup";
import { Formik } from "formik";

const CreatePostSection = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url(),
    caption: Yup.string().max(700, "Max caption limit has been reached!!"),
  });
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        errors,
      }) => (
        <>
          <View className="flex-row p-4 pb-10">
            <Image
              src={selectedImage ? selectedImage : POSTS[0].imageUrl}
              className="h-52 w-40"
            />
            <View className="flex-1 px-3">
              <ScrollView className="h-40" showsVerticalScrollIndicator={false}>
                <TextInput
                  autoCapitalize="none"
                  placeholderTextColor="white"
                  placeholder="Write a caption..."
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                  className="text-white   border-2  rounded-xl placeholder:text-lg break-all"
                />
              </ScrollView>
              {errors.caption && (
                <Text className="text-red-400">{errors.caption}</Text>
              )}
            </View>
          </View>
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
                      className="w-[120px] h-28"
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          <View className="mt-4 mx-2">
            <Button
              title="Share"
              onPress={handleSubmit}
              color={isValid ? "#0096F6" : "#6BB0F5"}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default CreatePostSection;
