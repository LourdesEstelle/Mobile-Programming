import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileOptions = ({ options, darkMode }) => {
  const colorPalette = {
    light: {
      background: '#f8f9fa',
      text: '#000000',
      border: '#eaeaea',
      touchableHighlight: '#f0f0f0',
    },
    dark: {
      background: '#1E1E1E',
      text: '#ffffff',
      border: '#555555',
      touchableHighlight: '#333333',
    },
  };

  const colors = darkMode ? colorPalette.dark : colorPalette.light;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.option, { borderBottomColor: colors.border }]}
          activeOpacity={0.6} 
          underlayColor={colors.touchableHighlight} 
        >
          <Text style={[styles.optionText, { color: colors.text }]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10, 
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500', 
  },
});

export default ProfileOptions;
