import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { buttonList } from '@/services/hooks/markconfButtonList';

interface MarkProps {
  setIsOpenMark: (value: boolean) => void;
}

const ButtonList = ({ setIsOpenMark}: MarkProps) => {
  const buttons = buttonList({ setIsOpenMark });

  return (
    <View className="w-full py-2 flex flex-row justify-end gap-5">
      {buttons.map((btn, i) => (
        <Pressable
          key={i}
          onPress={btn?.action}
          className={` p-3 rounded-lg ${btn?.bgcolor}`}
        >
          <Text className='text-white'>{btn?.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonList