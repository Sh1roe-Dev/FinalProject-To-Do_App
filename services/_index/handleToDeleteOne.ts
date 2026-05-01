import { STORAGE_KEY } from "@/storage/databaseStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleToDelete = async (index: number | null) => {
  try {
    if (index === null) return;

    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) return;

    const tasksArray = JSON.parse(data);

    tasksArray.splice(index, 1);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasksArray))

    console.log('deleted!')
  } catch (error) {
    throw error;
  }
};
