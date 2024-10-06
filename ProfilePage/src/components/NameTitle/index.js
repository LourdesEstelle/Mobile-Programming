import { View, Text } from 'react-native'
import React from 'react'

const NameTitle = () => {
  return (
    <View>
      <Text style = {{fontSize: 50, textTransform: 'uppercase'}}>Lordweil</Text>
      <Text style = {{fontSize: 30, color: 'gray', textTransform: 'uppercase'}}>Abalde</Text>
    </View>
  )
}

export default NameTitle