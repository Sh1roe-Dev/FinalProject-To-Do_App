// task objects
export type TaskProps = {
  task: string | null;
  status: "pending" | "completed";
};

export const STORAGE_KEY = 'TASK_DB';
