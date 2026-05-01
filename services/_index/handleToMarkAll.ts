import { STORAGE_KEY } from "@/storage/databaseStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TaskProp = {
  task: string;
  status: string;
}

type MarkAllProps = {
  setIsOpenMark: (value: boolean) => void
};

export const handleToMarkAll = async ({ setIsOpenMark }: MarkAllProps) => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) return;

    const tasksArray = JSON.parse(data);

    const updateAllStatus = tasksArray.map((task: TaskProp) => ({
      ...task,
      status: "completed",
    }));

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateAllStatus));

    console.log("All marked!");
    setIsOpenMark(false);
  } catch (error) {
    throw error;
  }
};
