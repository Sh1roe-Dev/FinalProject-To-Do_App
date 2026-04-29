import { STORAGE_KEY, TaskProps } from "@/storage/databaseStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTaskData = async (): Promise<TaskProps[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (data !== null) {
      const taskArray = JSON.parse(data);

      if (Array.isArray(taskArray)) {
        return taskArray
      } else {
        console.warn("Data is not an array:", taskArray);
        return [];
      }
    } else {  
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
