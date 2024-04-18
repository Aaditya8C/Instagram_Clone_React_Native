import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTabs from "../components/home/BottomTabs";
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type HomeNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const HomeScreen: React.FC<HomeNavigationProps> = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await getDocs(collectionGroup(db, "posts"))
        .then((querySnapshot) => {
          setPosts(querySnapshot.docs.map((doc) => doc.data()));
        })
        .catch((error) => {
          console.error("Error getting posts:", error);
        });
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container} className="py-12">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Stories />
        {posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
