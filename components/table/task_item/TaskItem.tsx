import { Color1, Color4 } from "@/services/hooks/_colors";
import { TaskProps } from "@/storage/databaseStorage";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";
import { handleToMarkTask } from "@/services/_index/handleToMarkTask";
import { handleToDelete } from "@/services/_index/handleToDeleteOne";

interface TaskItemProps extends TaskProps {
  index: number | null;
}

const TaskItem = ({ index, task, status }: TaskItemProps) => {
  return (
    <View
      className="relative w-full p-5 rounded-lg flex"
      style={{
        backgroundColor: Color4,
      }}
    >
      {status === "completed" && (
        <View className="ml-[20px] absolute w-[87%] border border-gray-400 flex top-8 left-6" />
      )}

      <Pressable
        className="flex flex-row items-center justify-between"
        onPress={() => handleToMarkTask(index)}
      >
        <View className="flex flex-row items-center">
          <View className={`h-6 w-6 p-0 flex justify-center items-center mr-4`}>
            {status === "completed" ? (
              <Text className=" h-full w-full flex justify-center items-center ">
                <Icon
                  name={"checkbox-circle-line" as IconName}
                  size={21}
                  color={Color1}
                />
              </Text>
            ) : (
              <Text>
                <Icon
                  name={"checkbox-blank-circle-line" as IconName}
                  size={21}
                  color={Color1}
                />
              </Text>
            )}
          </View>
          <Text className="">{task}</Text>
        </View>
        <View>
          <Pressable onPress={() => handleToDelete(index)}>
            <Text className="">
              <Icon
                name={"ri-delete-bin-6-line" as IconName}
                size={20}
                color="#fc7777"
              />
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default TaskItem;
