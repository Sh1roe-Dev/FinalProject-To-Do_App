import { getTaskData } from "../_index/getTaskData";

export const totalTask = async () => {
  const task = await getTaskData();

  const total = task.length;

  const totalPending = task.filter((t) => t.status === "pending").length;

  const done = task.filter((t) => t.status === "completed").length;

  return {
    total,
    totalPending,
    done,
  };
};
