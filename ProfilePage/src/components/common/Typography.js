import React from 'react';
import { View, Text, useColorScheme } from 'react-native';

const Typography = () => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: textColor }}>This is a Typography Component</Text>
    </View>
  );
}

export default Typography;
