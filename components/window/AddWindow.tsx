import { Color1, Color4, Color5 } from "@/services/hooks/_colors";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import CancelButton from "../add/CancelButton";
import SubmitButton from "../add/SubmitButton";
import Notes from "./Notes";

type WindowProps = {
  setIsOpen: (value: boolean) => void;
};

const AddWindow = ({ setIsOpen }: WindowProps) => {
  const [taskData, setTaskData] = useState<string>("");

  const [notes, setNotes] = useState<string | null>("");

  return (
    <View className="absolute bottom-0 w-[100%] bg-transparent h-[80%] justify-start items-center">
      <View
        className="rounded-lg w-[70%] h-[50%] flex flex-col justify-evenly items-center py-4 px-10"
        style={{
          backgroundColor: Color4,
          shadowColor: Color1,
        }}
      >
        <View>
          <Text className="text-2xl font-semibold">Add New Task</Text>
        </View>
        <View className="h-5">{notes !== "" && <Notes notes={notes} />}</View>

        <View className="w-full flex gap-2">
          <TextInput
            className="w-full h-15 border"
            style={{
              backgroundColor: Color5,
            }}
            value={taskData}
            onChangeText={setTaskData}
            placeholder="New Task"
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
