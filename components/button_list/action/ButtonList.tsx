import { Color1 } from "@/services/hooks/_colors";
import { buttonList } from "@/services/hooks/actionButtonList";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";

interface ButtonListProps {
  isOpenDelete: boolean | null;
  setIsOpenDelete: (value: boolean) => void;
  isOpenMark: boolean | null;
  setIsOpenMark: (value: boolean) => void;
  setisOpen: (value: boolean) => void;
}

const ButtonList = (action : ButtonListProps) => {
  const button = buttonList(action);
  return (
    <View className="w-full px-3 py-2 flex flex-row justify-between items-center">
      {button.map((btn: any, i) => (
        <Pressable
          key={i}
          className={`p-2 rounded-md flex flex-row justify-center items-center h-fit gap-1`}
          onPress={btn.action}
        >
          {/* <Icon name={btn.icon as IconName} size={15} /> */}
          <Text className={`text-md`}>{btn.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonList;
