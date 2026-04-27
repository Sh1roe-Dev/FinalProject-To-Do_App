import { BoxColor } from "@/services/_index/_colors";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";

interface AddProps {
  isOpen: boolean | null;
  setIsOpen: (value: boolean | null) => void;
}

const AddButton = ({ isOpen, setIsOpen }: AddProps) => {
  return (
    <View className="absolute w-full bg-transparent flex-1 justify-center items-center bottom-14">
      <Pressable
        className="w-16 h-16 rounded-full flex-1 justify-center items-center"
        style={{
          backgroundColor: BoxColor,
        }}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>
          <Icon name={"ri-add-large-line" as IconName} />
        </Text>
      </Pressable>
    </View>
  );
};

export default AddButton;
