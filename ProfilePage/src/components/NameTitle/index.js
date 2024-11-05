import React from 'react';
import { View, Text } from 'react-native';

const NameTitle = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 50, textTransform: 'uppercase' }}>Lordweil</Text>
      <Text style={{ fontSize: 30, color: 'gray', textTransform: 'uppercase' }}>Abalde</Text>
    </View>
  );
}

export default NameTitle;
