import { addTask } from "@/services/_index/addTask";
import React from "react";
import { Pressable, Text } from "react-native";

type SubmitProps = {
  task: string | null;
  setNotes: (value: string | null) => void;
  setIsOpen: (value: boolean) => void;
};

const SubmitButton = ({ task, setNotes, setIsOpen }: SubmitProps) => {
  const handleToSubmit = async () => {
    if (!task) {
      return setNotes("No Data Entered!");
    }
    try {
      const newTask = {
        task: task,
        status: "pending",
      };

      await addTask(newTask);

      setIsOpen(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Pressable
      className="w-full flex items-center py-4 rounded-md bg-green-400"
      onPress={handleToSubmit}
    >
      <Text className="font-semibold text-white">Submit</Text>
    </Pressable>
  );
};

export default SubmitButton;
