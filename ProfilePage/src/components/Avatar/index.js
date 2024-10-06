import React from 'react';
import { View, Image } from 'react-native';

const Avatar = ({ width = 150, height = 150 }) => {
  return (
    <View>
      <Image
        source={require('../../assets/avatar.jpg')}
        style={{ width, height, borderRadius: width / 2 }}
      />
    </View>
  );
}

export default Avatar;
