import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { deleteButton } from '@/services/hooks/deleteconfButtonList'

interface ButtonList {
  setIsOpenDelete: (value: boolean) => void;
}

const ButtonList = ({ setIsOpenDelete }: ButtonList) => {
  const buttons = deleteButton({ setIsOpenDelete });
  return (
    <View className="flex flex-row justify-end gap-5">
      {buttons.map((btn, i) => (
        <Pressable
          key={i}
          onPress={btn.action}
          className={`p-3 rounded-lg ${btn.bgcolor} `}
        >
          <Text className='text-white'>{btn.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonList