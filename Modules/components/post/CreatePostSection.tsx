import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { POSTS } from "../../data/posts";
import * as Yup from "yup";
import { Formik } from "formik";
import { db, FirebaseAuth } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
};

type CreatePostNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};
const CreatePostSection: React.FC<CreatePostNavigationProps> = ({
  navigation,
}) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url(),
    caption: Yup.string().max(700, "Max caption limit has been reached!!"),
  });

  const getUserDetails = async () => {
    const user = FirebaseAuth.currentUser;
    const userDataSnapshot = await getDocs(
      query(collection(db, "users"), where("owner_uid", "==", user.uid))
    );

    userDataSnapshot.docs.map((doc) => {
      setCurrentUser({
        username: doc.data().username,
        profile_url: doc.data().email,
      });
      // console.log(doc.data());
    });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const uploadPost = async (caption: string) => {
    // getting posts reference
    const postsCollection = collection(
      db,
      "users",
      FirebaseAuth.currentUser.email,
      "posts"
    );

    try {
      await addDoc(postsCollection, {
        imageUrl: selectedImage,
        user: currentUser.username,
        profile_picture: currentUser.profile_url,
        owner_uid: FirebaseAuth.currentUser.uid,
        caption: caption,
        createdAt: serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      }).then(() => {
        console.log("Post added successfully with ID: ");
        navigation.goBack();
      });
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <Formik
      initialValues={{ caption: "" }}
      onSubmit={(values) => uploadPost(values.caption)}
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
