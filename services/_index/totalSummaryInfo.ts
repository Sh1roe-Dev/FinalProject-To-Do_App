import { TaskProps } from "@/storage/databaseStorage";
import { useEffect, useState } from "react";
import { getTaskData } from "./getTaskData";

export const totalTask = () => {
  const [task, setTask] = useState<TaskProps[]>([]);

  useEffect(() => {
    getTaskData().then(setTask).catch(console.error);
  }, []);

  const total = task.length;

  const totalPending = task.filter((t) => t.status === "pending").length;

  const done = task.filter((t) => t.status === "completed").length;

  return {
    total,
    totalPending,
    done,
  };
};
