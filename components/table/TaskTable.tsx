import { getTaskData } from "@/services/_index/getTaskData";
import { TaskProps } from "@/storage/databaseStorage";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import TaskItem from "./task_item/TaskItem";
import Notask from '@/services/hooks/images/no-task.png';

const TaskTable = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    getTaskData().then(setTasks).catch(console.error);
  }, [tasks]);

  return (
    <View className="flex flex-col gap-2 px-3 pb-32">
      {tasks?.length > 0 ? (
        tasks.map((t, i) => (
          <TaskItem key={i} index={i} task={t?.task} status={t?.status} />
        ))
      ) : (
          <View className="w-full h-56 flex flex-col gap-3 justify-center items-center">
            <Image source={Notask} className="w-16 h-16"/>
          <Text className="font-semibold text-xl">No tasks</Text>
        </View>
      )}
    </View>
  );
};

export default TaskTable;
