import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "@/storage/databaseStorage"

export const handleToMarkTask = async (index: number | null) => {
  try {
    if (index === null) return;
    
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) return;

    const tasksArray = JSON.parse(data);

    tasksArray[index].status =
      tasksArray[index].status === 'pending' ? 'completed' : 'pending';

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasksArray))

    console.log('status updated!')
  } catch (error) {
    throw error;
  }
} 