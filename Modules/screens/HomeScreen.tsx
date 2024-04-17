import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTabs from "../components/home/BottomTabs";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const HomeScreen = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     await getDocs(collection(db, "posts")).then((res) => {
  //       console.log(
  //         "Posts loaded",
  //         res.docs.map((doc) => doc.data())
  //       );
  //     });
  //   };
  //   getData();
  // }, []);

  return (
    <SafeAreaView style={styles.container} className="py-12">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Stories />
        {POSTS.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ScrollView>
      <BottomTabs />
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
