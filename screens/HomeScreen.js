import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal={false} height={200} activeDotColor="#fff">
          <View style={styles.slide}>
            <Image
              source={require("../assets/online.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../assets/photo-1.jpeg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../assets/photo-15.jpeg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },

  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});
