import { getTaskData } from "@/services/_index/getTaskData";
import { TaskProps } from "@/storage/databaseStorage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import TaskItem from "./task_item/TaskItem";

const TaskTable = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    getTaskData().then(setTasks).catch(console.error);
  }, [tasks]);

  return (
    <View className="flex flex-col gap-2 px-3 pb-32">
      {tasks?.length > 0 ? (
        tasks.map((t, i) => <TaskItem key={i} index={i} task={t?.task} status={t?.status} />)
      ) : (
        <Text>No tasks</Text>
      )}
    </View>
  );
};

export default TaskTable;
