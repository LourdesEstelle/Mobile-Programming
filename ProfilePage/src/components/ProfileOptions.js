import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileOptions = ({ options }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  option: {
    paddingVertical: 15,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
});

export default ProfileOptions;
