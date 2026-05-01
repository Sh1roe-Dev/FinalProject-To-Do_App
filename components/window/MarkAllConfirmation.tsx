import { Color4 } from "@/services/hooks/_colors";
import React from "react";
import { Text, View } from "react-native";
import ButtonList from "../button_list/markConf/ButtonList";

interface MarkProps {
  setIsOpenMark: (value: boolean) => void;
}

const MarkAllConfirmation = ({ setIsOpenMark }: MarkProps) => {
  return (
    <View className="absolute py-20 w-full h-full bg-transparent flex justify-center items-center">
      <View
        className="w-[80%] px-5 py-10 rounded-xl flex flex-col gap-5 shadow-xl shadow-cyan-800"
        style={{
          backgroundColor: Color4,
        }}
      >
        <View>
          <Text className="text-xl font-semibold">
            Are you sure you want to mark all tasks as completed?
          </Text>
        </View>

        <ButtonList setIsOpenMark={setIsOpenMark} />
      </View>
    </View>
  );
};

export default MarkAllConfirmation;
