import { getTaskData } from "../_index/getTaskData";

export const totalTask = async () => {
  const task = await getTaskData();

  const total = task.length;

  const totalPending = task.filter((t) => t.status === "pending").length;

  const done = task.filter((t) => t.status === "completed").length;

  console.log(total);
  console.log(totalPending);
  console.log(done);

  return {
    total,
    totalPending,
    done,
  };
};
