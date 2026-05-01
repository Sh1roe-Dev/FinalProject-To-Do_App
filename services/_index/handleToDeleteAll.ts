import { STORAGE_KEY, TaskProps } from "@/storage/databaseStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handeToDeleteAll = async (
  setIsOpenDelete: (value: boolean) => void,
) => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) return;

    const tasksArray = JSON.parse(data);

    const getpending = tasksArray.filter(
      (task: TaskProps) => task.status !== "completed",
    );

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(getpending));

    console.log("updated!");
    setIsOpenDelete(false);
  } catch (error) {
    throw error;
  }
};
