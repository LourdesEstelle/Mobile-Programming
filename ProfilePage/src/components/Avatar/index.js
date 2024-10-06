import React from 'react';
import { View, Image } from 'react-native';

const Avatar = () => {
  return (
    <View>
      <Image
        source={require('../../assets/avatar.jpg')}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
}

export default Avatar;
