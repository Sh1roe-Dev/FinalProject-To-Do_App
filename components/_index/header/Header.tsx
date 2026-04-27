import { TextColor } from "@/services/_index/_colors";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="bg-transparent">
      <Text
        className="font-bold text-2xl"
        style={{
          color: TextColor,
        }}
      >
        To Do List
      </Text>
      <Text
        className=""
        style={{
          color: TextColor,
        }}
      >
        4 tasks
      </Text>
    </View>
  );
};

export default Header;
