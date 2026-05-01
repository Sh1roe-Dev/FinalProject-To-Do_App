import { Color1 } from "@/services/hooks/_colors";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";

interface AddProps {
  isOpen: boolean | null;
  setIsOpen: (value: boolean) => void;
  setIsOpenDelete: (value: boolean) => void;
  setIsOpenMark: (value: boolean) => void;
}

const AddButton = ({
  isOpen,
  setIsOpen,
  setIsOpenDelete,
  setIsOpenMark,
}: AddProps) => {
  return (
    <View className="absolute w-full bg-transparent flex-1 justify-center items-center bottom-14">
      <Pressable
        className="w-16 h-16 rounded-full flex-1 justify-center items-center"
        style={{
          backgroundColor: Color1,
        }}
        onPress={() => {
          setIsOpen(!isOpen);
          setIsOpenDelete(false);
          setIsOpenMark(false);
        }}
      >
        <Text>
          <Icon name={"ri-add-large-line" as IconName} />
        </Text>
      </Pressable>
    </View>
  );
};

export default AddButton;
