import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

// task objects
type TaskProps = {
  id: number | null;
  title: string;
  status: "pending" | "completed";
  created_date: Date;
};

export const database = async (task: TaskProps[]) => {
  const [taskList, getTaskList] = useState<TaskProps[]>(task);
};
