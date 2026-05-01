import { getTaskData } from "@/services/_index/getTaskData";
import { TaskProps } from "@/storage/databaseStorage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Header = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    getTaskData().then(setTasks).catch(console.error);
  }, [tasks]);
  return (
    <View className="bg-transparent px-3 pb-2">
      <Text className="font-bold text-2xl">To Do List</Text>
      <Text>{tasks.length} tasks</Text>
    </View>
  );
};

export default Header;
