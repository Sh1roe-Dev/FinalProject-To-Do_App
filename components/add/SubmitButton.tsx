import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { BoxColor } from '@/services/_index/_colors'
const SubmitButton = () => {
  return (
    <Pressable
      className="w-full flex items-center py-4 rounded-md"
      style={{
        backgroundColor: BoxColor,
      }}
    >
      <Text className="font-semibold">SubmitButton</Text>
    </Pressable>
  );
}

export default SubmitButton