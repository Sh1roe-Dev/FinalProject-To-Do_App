import { STORAGE_KEY } from "@/storage/databaseStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AddTaskProps {
  task: string | null;
  status: string | null;
}

export const addTask = async (newTask: AddTaskProps) => {
  const existingData = await AsyncStorage.getItem(STORAGE_KEY);

  const taskA = existingData ? JSON.parse(existingData) : [];

  taskA.push(newTask);

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(taskA));
 
};
