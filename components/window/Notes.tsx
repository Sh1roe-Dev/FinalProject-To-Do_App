import { View, Text } from 'react-native'
import React from 'react'

type NotesProps = {
  notes: string | null;
}
const Notes = ({notes}: NotesProps) => {

  return (
    <View>
      <Text className='text-red-400'>{notes}</Text>
    </View>
  )
}

export default Notes