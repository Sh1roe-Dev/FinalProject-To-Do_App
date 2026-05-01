import React from "react";
import { Text, View } from "react-native";
import ButtonList from "../button_list/deleteConf/ButtonList";
import { Color1, Color4 } from "@/services/hooks/_colors";

interface DeleteConfProps {
  setIsOpenDelete: (value: boolean) => void;
}

const DeleteConfirmation = ({
  setIsOpenDelete,
}: DeleteConfProps) => {
  return (
    <View className="absolute bg-transparent w-full h-full flex justify-center items-center">
      <View
        className="w-[80%] px-5 py-10 rounded-xl flex flex-col gap-5 shadow-xl shadow-cyan-800"
        style={{
          backgroundColor: Color4,
        }}
      >
        <View>
          <Text className="text-lg font-semibold">
            Are you sure you want to delete all completed tasks?
          </Text>
        </View>
        {/* buttonn actions */}
        <ButtonList setIsOpenDelete={setIsOpenDelete} />
      </View>
    </View>
  );
};

export default DeleteConfirmation;
