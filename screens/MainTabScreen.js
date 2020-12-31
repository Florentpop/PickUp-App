import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#00A571",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#00A571",
      },
      headerTintColor: "#fff",
      hraderTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "PickUp",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#00A571"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      hraderTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#1f65ff"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#694fad",
      },
      headerTintColor: "#fff",
      hraderTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#694fad"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#d02860",
      },
      headerTintColor: "#fff",
      hraderTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#d02860"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ExploreStack.Navigator>
);
