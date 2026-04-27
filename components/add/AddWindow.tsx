import { BgColor, Color2, TextColor } from "@/services/_index/_colors";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import SubmitButton from "./SubmitButton";

interface TaskProps {
  task: string;
}

const AddWindow = () => {
  const [taskData, setTaskData] = useState<TaskProps>({
    task: "",
  });

  return (
    <View className=" w-[100%] bg-transparent h-[100%] justify-start items-center">
      <View
        className="rounded-lg w-[70%] h-[80%] flex flex-col justify-evenly items-center py-4 px-10 gap-3"
        style={{
          backgroundColor: Color2,
          shadowColor: TextColor,
        }}
      >
        <View>
          <Text className="text-2xl font-semibold">Add New Task</Text>
        </View>
        <View className="w-full flex gap-2">
          <Text>Task</Text>
          <TextInput
            className="w-full h-10"
            style={{
              backgroundColor: BgColor,
            }}
            value={taskData.task}
            onChange={(text) => {
              setTaskData({...taskData, task: text as any})
            }}
          />
        </View>
        <SubmitButton />
      </View>
    </View>
  );
};

export default AddWindow;
