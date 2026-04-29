import { BoxColor } from "@/services/_index/_colors";
import React from "react";
import { Pressable, Text } from "react-native";

type CancelProps = {
  setIsOpen: (value: boolean | null) => void;
};

const CancelButton = ({ setIsOpen }: CancelProps) => {
  return (
    <Pressable
      className="w-full flex items-center py-4 rounded-md bg-red-400"
      onPress={() => setIsOpen(false)}
    >
      <Text className="text-white">Cancel</Text>
    </Pressable>
  );
};

export default CancelButton;
