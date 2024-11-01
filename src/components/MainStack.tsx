import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { PurchaseHistoryScreen } from "./screens/PurchaseHistoryScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#22c55e",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "ConsumeWise" }}
      />
      <StackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "Product Details" }}
      />
      <StackNavigator.Screen
        name="PurchaseHistory"
        component={PurchaseHistoryScreen}
        options={{ title: "Purchase History" }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);