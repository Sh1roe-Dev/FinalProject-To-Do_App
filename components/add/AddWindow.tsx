import { BgColor, Color2, TextColor } from "@/services/_index/_colors";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Notes from "../window/Notes";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

type WindowProps = {
  setIsOpen: (value: boolean | null) => void;
};

const AddWindow = ({ setIsOpen }: WindowProps) => {
  const [taskData, setTaskData] = useState<string>('');

  const [notes, setNotes] = useState<string | null>("");

  return (
    <View className="absolute bottom-0 w-[100%] bg-transparent h-[80%] justify-start items-center">
      <View
        className="rounded-lg w-[70%] h-[50%] flex flex-col justify-evenly items-center py-4 px-10 gap-3"
        style={{
          backgroundColor: Color2,
          shadowColor: TextColor,
        }}
      >
        <View>
          <Text className="text-2xl font-semibold">Add New Task</Text>
        </View>
        {notes !== "" && <Notes notes={notes} />}
        <View className="w-full flex gap-2">
          <Text>Task</Text>
          <TextInput
            className="w-full h-10"
            style={{
              backgroundColor: BgColor,
            }}
            value={taskData}
            onChangeText={setTaskData}
          />
        </View>
        <View className="w-full flex gap-2">
          <SubmitButton
            task={taskData}
            setNotes={setNotes}
            setIsOpen={setIsOpen}
          />
          <CancelButton setIsOpen={setIsOpen} />
        </View>
      </View>
    </View>
  );
};

export default AddWindow;
