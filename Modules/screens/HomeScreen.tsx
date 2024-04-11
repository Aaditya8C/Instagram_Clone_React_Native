import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTabs from "../components/home/BottomTabs";

const HomeScreen = () => {
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
