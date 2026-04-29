import { Color2 } from "@/services/_index/_colors";
import { TaskProps } from "@/storage/databaseStorage";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";

interface TaskItemProps extends TaskProps {
  index: number | null;
}

const TaskItem = ({ index, task, status }: TaskItemProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <View
      className="relative w-full p-5 rounded-lg flex"
      style={{
        backgroundColor: Color2,
      }}
    >
      {checked && (
        <View className="absolute w-[98%] border border-gray-400 flex top-8 left-6" />
      )}

      <TouchableOpacity
        className="flex flex-row items-center justify-between"
        onPress={() => setChecked(!checked)}
      >
        <View className="flex flex-row items-center">
          <View
            className={`h-6 w-6 p-0 flex justify-center items-center mr-4`}
          >
            {checked ? (
              <Text className=" h-full w-full flex justify-center items-center ">
                <Icon name={"ri-checkbox-fill" as IconName} size={21}/>
              </Text>
            ) : (
                <Text>
                  <Icon name={'ri-square-line' as IconName} size={21} />
                </Text>
            )}
          </View>
          <Text className="">
            {task} {status}
          </Text>
        </View>
        <View>
          <Pressable>
            <Text className="">
              <Icon name={"ri-delete-bin-6-line" as IconName} size={21} />
            </Text>
          </Pressable>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
